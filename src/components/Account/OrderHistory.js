import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { NavigationSide } from "./NavigationSide";
import { useEffect, useState } from "react";
import { realtimeDatabase } from "../../configs/firebase-config";
import { UserAuth } from "../../contexts/AuthContext";
import { onValue, ref, update } from "firebase/database";
export const OrderHistory = () => {
  const { user, setUser, logout } = UserAuth();
  const [orderHistory, setOrderHistory] = useState([]);
  useEffect(() => {
    if (user) {
      const userDatabaseRef = ref(realtimeDatabase, `users/${user.uid}`);
      onValue(userDatabaseRef, (snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          setOrderHistory(userData.orderHistory || []);
        }
      });
    }
  }, [user]);
  return (
    <div className="mt-[55px]">
      <Navbar></Navbar>
      <div className="grid grid-cols-6 px-4 sm:px-9 mb-[100px]">
        <div className="col-span-1 flex mt-[45px] ml-3">
          <NavigationSide></NavigationSide>
        </div>
        <div className="col-span-4 pl-3 flex justify-center min-h-[75vh]">
          <div className="text-xs max-w-[480px] mt-[35px]">
            {orderHistory.length > 0 && <div>Has Order</div>}
            {orderHistory.length === 0 && <div>u don't have any orders</div>}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
