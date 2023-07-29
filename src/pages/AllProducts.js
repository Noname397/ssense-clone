import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Products } from "../components/Products/Products";
export const AllProducts = () => {
    return (
        <div>  
            <Navbar></Navbar>
            <Products></Products>
            <Footer></Footer>
        </div>
    )
}