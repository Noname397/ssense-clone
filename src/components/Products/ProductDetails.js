import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useState } from "react";
export const ProductDetails = () => {
  const location = useLocation();
  const product = location.state;
  const buttonValues = [0,1,2,3];
  const [activeSlideButton,setActiveSlideButton] = useState(0); 
  console.log(product);
  return (
    <div className="mt-[55px] px-4 sm:px-9">
      <Navbar></Navbar>
      <div className="hidden lg:grid w-full grid-cols-5 ">
        <div className="col-span-1">
          <div className="sticky top-[30%]">
            <div className="text-xs uppercase">{product?.brand}</div>
            <div className="text-xs">{product?.name}</div>
            <div className="text-xs">
              {product?.description}
              {product?.attribute.map((item) => {
                return <li className="text-xs">{item}</li>;
              })}
              <p>
                {product?.supplierColor
                  ? "Supplier color: " + product?.supplierColor
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-[240px] border border-transparent"></div>
            {product?.imgLinks.map((link) => {
              return (
                <div className="h-screen mb-75 max-w-[450px]">
                  <img src={link} alt="" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-1">
          <div className="sticky top-[30%] mr-[50px]">
            <div className="text-xs">{"$" + product?.price}</div>
            <div className="flex">
              <button className="text-xs uppercase min-w-[140px] min-h-[35px] bg-black text-white">
                Add to bag
              </button>
              <button className="text-xs  uppercase min-w-[140px] min-h-[35px] bg-white text-black">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden grid w-full min-[576px]:grid-cols-4 md:grid-cols-5 m gap-x-3 text-xs ">
        <div className="md:col-span-3 col-span-2 ">
          <div className=" grid place-items-center overflow-hidden h-[400px] md:h-[600px]">
            <img src={product?.imgLinks[activeSlideButton]} className="max-h-full object-fill" alt="" />
          </div>
          <div className="flex justify-center">
            {
              buttonValues.map((index) => {
                return <button onClick={() => {
                  setActiveSlideButton(index)
                }} className={`border-t-2 m-0.5 ${activeSlideButton === index ? 'w-[45px] border-black' : 'w-5 border-[#B6B6B6]'}`}></button>
              })
            } 
          </div>
        </div>
        <div className="col-span-2 h-full">
          <div className="flex justify-between mb-[15px]">
            <div>
              <p className="uppercase">{product?.brand}</p>
              <p>{product?.name}</p>
            </div>
            <p>{"$" + product?.price}</p>
          </div>
          <div className="flex mb-[15px]">
            <button className="text-xs uppercase min-w-[140px] min-h-[35px] bg-black text-white">
              Add to bag
            </button>
            <button className="text-xs uppercase min-w-[125px] min-h-[35px] bg-white text-black">
              Add to wishlist
            </button>
          </div>
          <div className="mb-[15px]">
            <h3 className="uppercase">Item info</h3>
            <h4>
              {product?.description}
              {product?.attribute.map((item) => {
                return <li className="text-xs">{item}</li>;
              })}
            </h4>
            <p>{"Supplier color: " + product?.supplierColor}</p>
          </div>
        </div>
      </div>
      <div className="uppercase text-xs">You may also like</div>

      <div className="uppercase text-xs">{product?.brand}</div>
      <Footer></Footer>
    </div>
  );
};
