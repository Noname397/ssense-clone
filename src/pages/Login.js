import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { LoginForm } from "../components/LoginForm/LoginForm";
const Login = () => {
    return <div className="mt-[55px]">
        <Navbar></Navbar>
        <LoginForm></LoginForm>
        <Footer></Footer>       
    </div>
}

export default Login;