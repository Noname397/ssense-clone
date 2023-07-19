import { useLocation } from "react-router-dom"
import Navbar from "../Navbar/Navbar";
export const ProductDetails = () => {
    const location = useLocation();
    const product = location.state;
    console.log(product)
    return (
        <div className="mt-[55px]">
            <Navbar></Navbar>
            <div className="">
                {product.imgLink && <img src={product.imgLink} alt="" />}
            </div>
            <div className="text-xs uppercase">
                {product.brand}
            </div>
            <div className="text-xs">
                {product.name}
            </div>
            <div className="text-xs">
                {'$'+product.price}
            </div>
        </div>
    )
}