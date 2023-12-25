import { CheckoutDetails } from "../components/Checkout/CheckoutDetails"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"

export const Checkout = () => {
    return (
        <div className="pt-[55px]">
            <Navbar></Navbar>
            <CheckoutDetails></CheckoutDetails>                     
            <Footer></Footer>
        </div>
    )
}