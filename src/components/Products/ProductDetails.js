import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
export const ProductDetails = () => {
  const location = useLocation();
  const product = location.state;
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
      <div className="lg:hidden grid w-full grid-cols-5 gap-x-3">
        <div className="col-span-3">
          <img src={product.imgLinks[0]} alt="" />
        </div>
        <div className="col-span-2">
          <div className="flex justify-between">
            <div>
              <p>{product?.brand}</p>
              <p>{product?.name}</p>
            </div>
            <p>{"$" + product?.price}</p>
          </div>
          <div className="flex">
            <button className="text-xs uppercase min-w-[140px] min-h-[35px] bg-black text-white">
              Add to bag
            </button>
            <button className="text-xs  uppercase min-w-[140px] min-h-[35px] bg-white text-black">
              Add to wishlist
            </button>
          </div>
          <div>
            <h3>Item info</h3>
            <h4>
              {product?.description}
              {product?.attribute.map((item) => {
                return <li className="text-xs">{item}</li>;
              })}
            </h4>
            <p>{'Supplier color: ' + product?.supplierColor}</p>
          </div>
        </div>
      </div>
      <div>You may also like</div>

      <div>{product?.brand}</div>
      <Footer></Footer>
    </div>
  );
};
