import { LeftSideBar } from "./LeftSideBar";
import { RightSideBar } from "./RightSideBar";
import { ProductCard } from "./ProductCard";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../configs/firebase-config";
import { useState,useEffect } from "react";
export const Products = () => {
  const productsCollectionRef = collection(db, "products");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };

    getProducts();
  }, []);

  const linkifyString = (str) => {
    return str.replace(/\s+/g, "-").replace(/['"]+/g, "").replace(/\*+/g,"").toLowerCase();
  };
  return (
    <div className="pt-[55px] px-4 sm:px-9">
      <div className="grid grid-cols-6">
        <div className="col-span-1">
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-4 gap-y-[30px] gap-x-[10px]">
            {products.map((product, index) => {
              return (
                <Link
                  to={
                    "/product/" +
                    linkifyString(product.brand) +
                    "/" +
                    linkifyString(product.name)
                  }
                  state={product}
                  key={index}
                >
                  <ProductCard
                    brand={product.brand}
                    name={product.name}
                    type={product.type}
                    price={product.price}
                    size={product.size}
                    description={product.description}
                    attribute={product.attribute}
                    supplierColor={product.supplierColor}
                    imgPreview={product.imgPreview}
                    imgLinks={product.imgLinks}
                  ></ProductCard>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="col-span-1">
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};
