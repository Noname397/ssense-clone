import Navbar from "../Navbar/Navbar";
import { LeftSideBar } from "./LeftSideBar";
import { RightSideBar } from "./RightSideBar";
import { ProductCard } from "./ProductCard";
import Footer from "../Footer/Footer";
import { UserProduct } from "../../contexts/ProductContext";
import { Link } from "react-router-dom";
export const Products = () => {
  const { products } = UserProduct();

  const linkifyString = (str) => {
    return str.replace(/\s+/g, "-").replace(/['"]+/g, "").replace(/\*+/g,"").toLowerCase();
  };
  return (
    <div className="pt-[55px] px-4 sm:px-9">
      <Navbar></Navbar>
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
      <Footer></Footer>
    </div>
  );
};
