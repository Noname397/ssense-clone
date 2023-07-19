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
      imgLink: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/232342M134094_1/balenciaga-tortoiseshell-90s-sunglasses.jpg"
    },
    {
      brand: "Balenciaga",
      name: "Tortoiseshell 90s Sunglasses",
      price: 545,
      imgLink: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/232342M134094_1/balenciaga-tortoiseshell-90s-sunglasses.jpg"
    },
    {
      brand: "Balenciaga",
      name: "Tortoiseshell 90s Sunglasses",
      price: 545,
      imgLink: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/232342M134094_1/balenciaga-tortoiseshell-90s-sunglasses.jpg"
    },
    {
      brand: "Balenciaga",
      name: "Tortoiseshell 90s Sunglasses",
      price: 545,
      imgLink: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/232342M134094_1/balenciaga-tortoiseshell-90s-sunglasses.jpg"
    },
    {
      brand: "Balenciaga",
      name: "Tortoiseshell 90s Sunglasses",
      price: 545,
      imgLink: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/232342M134094_1/balenciaga-tortoiseshell-90s-sunglasses.jpg"
    },
    {
      brand: "Balenciaga",
      name: "Tortoiseshell 90s Sunglasses",
      price: 545,
      imgLink: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/232342M134094_1/balenciaga-tortoiseshell-90s-sunglasses.jpg"
    },
    {
      brand: "Balenciaga",
      name: "Tortoiseshell 90s Sunglasses",
      price: 545,
      imgLink: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/232342M134094_1/balenciaga-tortoiseshell-90s-sunglasses.jpg"
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
              return <ProductCard brand={product.brand} name={product.name} price={product.price} imgLink={product.imgLink}></ProductCard>;
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
