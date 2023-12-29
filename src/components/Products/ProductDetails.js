import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { UserCart } from "../../contexts/CartContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../configs/firebase-config";
import { Carousel } from "./Carousel";
import { RelatedProducts } from "./RelatedProducts";
export const ProductDetails = () => {
  const location = useLocation();
  const [product,setProduct] = useState(location.state);
  useEffect(() => {
    const getProducts = async () => {
      const productsCollectionRef = collection(db, "products");
      const data = await getDocs(productsCollectionRef);
      const processedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(processedData);
      //setProducts(processedData);
      //setFilteredProducts(processedData);
    };

    getProducts();
  }, []);
  const [imageStyles, setImageStyles] = useState([]);
  const handleImageLoad = (index, event) => {
    event.preventDefault();
    const { naturalWidth, naturalHeight } = event.target;
    console.log(index);
    console.log(naturalHeight + "-" + naturalWidth);
    const isWide = naturalWidth > naturalHeight;
    console.log(isWide);
    const newStyles = [...imageStyles];
    setImageStyles(prevStyles => {
      const newStyles = [...prevStyles];
      console.log("before adding", newStyles);
      newStyles.push(isWide);
      console.log("newStyles", newStyles);
      console.log("after adding", newStyles);
      return newStyles;
  });
  };

  useEffect(() => {
    // Load image dimensions when the component mounts
    const handleAllImage = async () => {
      product.imgLinks.forEach((_, index) => {
        const img = new Image();
        img.onload = (event) => handleImageLoad(index, event);
        img.src = product.imgLinks[index];
      });
    }
    handleAllImage();
  }, [product]);

  console.log(product)
  const { cart, addToCart,findIndexItem } = UserCart();
  // const buttonValues = product?.imgLinks?.map((item, index) => {
  //   return index;
  // });
  // const [activeSlideButton, setActiveSlideButton] = useState(0);
  console.log(product);
  console.log(cart);
  const item = {
    product: product,
    quantity: 1,
  };
  console.log(findIndexItem(item));
  const handleAddCart = () => {
    addToCart(item);
  };
  return (
    <div className="mt-[55px] px-4 sm:px-9">
      <Navbar></Navbar>
      <div className="hidden lg:grid w-full grid-cols-5 ">
        <div className="col-span-1">
        <div className="sticky" style={{
          top: 'calc(50vh - 80px)'
        }}>
            <div className="text-xs uppercase">{product?.brand}</div>
            <div className="text-xs">{product?.name}</div>
            <div className="text-xs">
              {product?.description}
              {product?.attributes.length > 0
                ? product?.attributes.map((item) => {
                    return <li className="text-xs">{item}</li>;
                  })
                : null}
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
            {product?.imgLinks?.map((link,index) => {
              return (
                <div className="h-screen mb-75 w-[450px] mb-4 flex justify-center items-center">
                  <img src={link} className={`object-cover ${
                                  imageStyles[index] ? "w-full" : "h-full"
                                }`} style={{
                                  zIndex: "-1",
                                  
                                }} alt="" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-1">
          <div className="sticky xl:mr-[50px]" style={{
          top: 'calc(50vh - 80px)'
        }}>
            <div className="text-xs">{"$" + product?.price}</div>
            <div className="flex w-full">
            <button
                className="text-xs uppercase w-1/2 min-h-[35px] bg-black text-white px-1"
                onClick={handleAddCart}
              >
                Add to bag
              </button>
              <button className="text-xs  uppercase w-1/2 min-h-[35px] bg-white text-black px-1">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden grid w-full min-[576px]:grid-cols-4 md:grid-cols-5 m gap-x-3 text-xs ">
        <div className="md:col-span-3 col-span-2 ">
          <div className="h-[400px] md:h-[600px] flex relative">
            <Carousel slides={product.imgLinks} className="h-full">
              {/* {product?.imgLinks?.map((link) => {
                return (
                  <div className="grid place-items-center">
                    <img src={link} className="max-h-full object-fill" alt="" />
                  </div>
                );
              })} */}
            </Carousel>
          </div>
        </div>
        <div className="col-span-2 h-full mt-[15px]">
          <div className="flex justify-between mb-[15px]">
            <div>
              <p className="uppercase">{product?.brand}</p>
              <p>{product?.name}</p>
            </div>
            <p>{"$" + product?.price}</p>
          </div>
          <div className="flex mb-[15px]">
          <button
                className="text-xs uppercase min-w-[140px] min-h-[35px] bg-black text-white"
                onClick={handleAddCart}
              >
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
              {product?.attributes.length > 0
                ? product?.attributes.map((item) => {
                    return <li className="text-xs">{item}</li>;
                  })
                : null}
            </h4>
            <p>{"Supplier color: " + product?.supplierColor}</p>
          </div>
        </div>
      </div>
      <div className="mt-7">
      <div className="uppercase text-xs">
        <p>You may also like</p>
         <RelatedProducts></RelatedProducts>
        </div>
      <div className="uppercase text-xs">{product?.brand}</div>
      </div>
      <Footer></Footer>
    </div>
  );
};
