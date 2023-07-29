import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { CartDetails } from "../components/CartDetails/CartDetails"
export const ShoppingCart = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <CartDetails></CartDetails>
            <Footer></Footer>
        </div>
    )
}