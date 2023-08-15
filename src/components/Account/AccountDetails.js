import { useEffect, useState } from "react";
import { UserAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { onValue, ref, update } from "firebase/database";
import { realtimeDatabase } from "../../configs/firebase-config";
import { EmailPreference } from "./EmailPreferences";
import { NavigationSide } from "./NavigationSide";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
export const AccountDetails = () => {
  const navigate = useNavigate();
  const { user, setUser, logout } = UserAuth();
  const [firstName, setFirstName] = useState("");
  const [submit, setSubmit] = useState(false);
  const [lastName, setLastName] = useState("");
  // const [errorLastName, setErrorLastName] = useState();
  const [email, setEmail] = useState("");

  const [addresses, setAddresses] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);
  useEffect(() => {
    if (user) {
      const userDatabaseRef = ref(realtimeDatabase, `users/${user.uid}`);
      onValue(userDatabaseRef, (snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          // setFirstName(userData.firstName || "");
          // setLastName(userData.lastName || "");
          setEmail(userData.email || "");
          setAddresses(userData.addresses || []);
          setOrderHistory(userData.orderHistory || []);
        }
      });
    }
  }, [user]);

  const handleAccountDetails = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (firstName.length > 0 && lastName.length > 0) {
      const userDatabaseRef = ref(realtimeDatabase, `users/${user.uid}`);
      update(userDatabaseRef, { firstName, lastName })
        .then(() => {
          alert("Updated name successfully");
        })
        .catch((error) => {
          alert("Error updating:", error);
        });
    }
  };

  const [active,setActive] = useState(2);
  return (
    <div className="mt-[55px]">
      <Navbar></Navbar>
      <div className="grid grid-cols-6 px-4 sm:px-9 mb-[100px]">
        <div className="hidden lg:col-span-1 lg:flex mt-[45px] ml-3">
          <NavigationSide></NavigationSide>
        </div>
        <div className="col-span-6 lg:col-span-4 pl-3 flex justify-center min-h-[75vh]">
          {active === 1 && (
            <div className="mt-[35px]">
              {orderHistory.length > 0 && <div>Has Order</div>}
              {orderHistory.length === 0 && <div>u don't have any orders</div>}
            </div>
          )}
          {active === 2 && (
            <form className="text-xs w-[480px] mt-[35px]">
              <h1 className="capitalize text-base text-center mb-[25px] ">
                Account details
              </h1>
              <h2 className="mb-2.5">Edit your preference below</h2>
              <div className="flex flex-col">
                <h3 className="text-[13px] font-normal leading-5">
                  Account information
                </h3>
                <label htmlFor="firstname" className="mt-2.5 mb-[5px]">
                  First name
                </label>
                <input
                  type="text"
                  id="firstname"
                  placeholder={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  className={`text-xs w-full ${
                    submit === true && firstName.length === 0
                      ? "border-red-600 focus:border-red-600"
                      : "border-black focus:border-black"
                  } border-[0.8px] h-[30px] outline-none px-1.5 focus:ring-0`}
                />
                {submit === true && firstName.length === 0 && (
                  <p className="mt-1 mb-2.5 text-red-600">
                    Please fill out this field.
                  </p>
                )}
                <label htmlFor="lastname" className="mt-2.5 mb-[5px]">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastname"
                  placeholder={lastName}
                  className={`text-xs w-full ${
                    submit === true && lastName.length === 0
                      ? "border-red-600 focus:border-red-600"
                      : "border-black focus:border-black"
                  }  border-[0.8px] h-[30px] outline-none px-1.5 focus:ring-0`}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
                {submit === true && lastName.length === 0 && (
                  <p className="mt-1 text-red-600 mb-2.5">
                    Please fill out this field.
                  </p>
                )}
                <label htmlFor="email" className="mt-2.5 mb-[5px]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  disabled
                  value={email}
                  className="text-xs w-full border-[#ccc] border-[0.8px] h-[30px] outline-none px-1.5 mb-5 cursor-not-allowed"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[13px] font-normal leading-5">
                  Account information
                </h3>
                <label htmlFor="oldpassword" className="mt-2.5 mb-[5px]">
                  Old password
                </label>
                <input
                  type="text"
                  id="oldpassword"
                  className="text-xs w-full border-black border-[0.8px] h-[30px] outline-none px-1.5"
                />
                <label htmlFor="newpassword" className="mt-2.5 mb-[5px]">
                  New password
                </label>
                <input
                  type="text"
                  id="newpassword"
                  className="text-xs w-full border-black border-[0.8px] h-[30px] outline-none px-1.5 mb-5"
                />
              </div>
              <div className="grid place-items-center mt-5">
                <button
                  className="text-xs w-[200px] px-7.5 py-[6px] bg-black text-white"
                  onClick={(e) => {
                    handleAccountDetails(e);
                  }}
                >
                  SAVE CHANGES
                </button>
              </div>
            </form>
          )}
          {active === 3 && <EmailPreference></EmailPreference>}

        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
