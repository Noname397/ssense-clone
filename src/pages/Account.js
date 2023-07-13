import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
export const Account = () => {
  const [user, setUser, login, logout] = useContext(AuthContext);
  useEffect(() => {
    const userData = window.localStorage.getItem("userInfo");
    setUser(JSON.parse(userData));
  }, []);

  return (
    <div className="pt-[55px]">
      <Navbar></Navbar>
      <div>
        <div>Welcome {user.user.email}</div>
        <button onClick={logout}> Log out</button>
      </div>
      <Footer></Footer>
    </div>
  );
};
