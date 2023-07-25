import { NA } from "xlsx-populate/lib/FormulaError";
import Navbar from "../Navbar/Navbar";
import { LeftSideBar } from "./LeftSideBar";
import { RightSideBar } from "./RightSideBar";
import { ProductCard } from "./ProductCard";
import Footer from "../Footer/Footer";
export const Products = () => {
  let products = [
    {
      brand: "Balenciaga",
      name: "Tortoiseshell 90s Sunglasses",
      price: 545,
      description: 'Oval bio-acetate-frame sunglasses in tortoiseshell.',
      attribute: ['Brown lenses with 100% UVA/UVB protection','Integrated nose pads','Logo engraved at temple','Hardside case included','Size: 83.15 120'],
      supplierColor: 'Havana brown',
      imgPreview:
        "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/232342M134094_1/balenciaga-tortoiseshell-90s-sunglasses.jpg",
      imgLinks:[
        "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/232342M134094_1/balenciaga-tortoiseshell-90s-sunglasses.jpg",
        "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/232342M134094_2/balenciaga-tortoiseshell-90s-sunglasses.jpg",
        "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/232342M134094_3/balenciaga-tortoiseshell-90s-sunglasses.jpg",
        "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/232342M134094_4/balenciaga-tortoiseshell-90s-sunglasses.jpg"]
    },
  ];
  return (
    <div className="pt-[55px] px-4 sm:px-9">
      <Navbar></Navbar>
      <div className="grid grid-cols-6">
        <div className="col-span-1">
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-4 gap-y-[30px] gap-x-[10px]">
            {products.map((product) => {
              return (
                <ProductCard
                  brand={product.brand}
                  name={product.name}
                  price={product.price}
                  description= {product.description}
                  attribute={product.attribute}
                  supplierColor={product.supplierColor}
                  imgPreview={product.imgPreview}
                  imgLinks={product.imgLinks}
                ></ProductCard>
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
