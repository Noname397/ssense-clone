import { useContext, useEffect, useState } from "react";
import { UserAuth } from "../contexts/AuthContext";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { AccountDetails } from "../components/Account/AccountDetails";
export const Account = () => {
  const { user, setUser, login, logout } = UserAuth();
  return (
    <div className="pt-[55px]">
      <Navbar></Navbar>
      <AccountDetails user={user}></AccountDetails>
      <Footer></Footer>
    </div>
  );
};
