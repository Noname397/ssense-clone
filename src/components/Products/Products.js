import { LeftSideBar } from "./LeftSideBar";
import { RightSideBar } from "./RightSideBar";
import { ProductCard } from "./ProductCard";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../configs/firebase-config";
import { useState, useEffect } from "react";
export const Products = () => {
  const productsCollectionRef = collection(db, "products");
  const [products, setProducts] = useState([]);
  const [functionName, setFunctionName] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  function filterProducts(functionName) {
    let temp = [...products];
    switch (functionName) {
      case "accessories":
        return temp.filter((item) => item?.type === "accessory");
      case "bags":
        return temp.filter((item) => item?.type === "bag");
      case "clothing":
        return temp.filter((item) => item?.type === "clothing");
      case "shoes":
        return temp.filter((item) => item?.type === "shoe");
      case "descendingPrice":
        return temp.sort((a, b) => b.price - a.price);
      case "ascendingPrice":
        return temp.sort((a, b) => a.price - b.price);
      default:
        return temp;
    }
  }

  useEffect(() => {
    console.log(functionName);
    console.log(filterProducts(functionName))
    setFilteredProducts(filterProducts(functionName));
  }, [functionName]);


  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      const processedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(processedData);
      setProducts(processedData);
      setFilteredProducts(processedData);
    };

    getProducts();
  }, []);

  const linkifyString = (str) => {
    return str
      .replace(/\s+/g, "-")
      .replace(/['"]+/g, "")
      .replace(/\*+/g, "")
      .toLowerCase();
  };
  return (
    <div className="pt-[55px] px-4 sm:px-9">
      <div className="grid grid-cols-6">
        <div className="col-span-1">
          <LeftSideBar function={setFunctionName} products={products}></LeftSideBar>
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-4 gap-y-[30px] gap-x-[10px]">
            {filteredProducts.map((product, index) => {
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
                  {index}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="col-span-1">
          <RightSideBar function={setFunctionName}></RightSideBar>
        </div>
      </div>
    </div>
  );
};
