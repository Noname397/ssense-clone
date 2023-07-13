import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const navigate = useNavigate();
    const [user,setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
        console.log("AHIHI");
        window.localStorage.setItem('userInfo',JSON.stringify(userData));
        navigate("/");
    }

    const logout = () => {
        console.log(user)
        setUser(null);
        window.localStorage.removeItem('userInfo');
        console.log("Logging out");
        navigate('/');
    }

    const authContextValue = [
        user,
        setUser,
        login,
        logout,
    ];
    
      return (
        <AuthContext.Provider value={authContextValue}>
          {props.children}
        </AuthContext.Provider>
      );
}