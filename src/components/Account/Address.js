import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { NavigationSide } from "./NavigationSide";
import { UserAuth } from "../../contexts/AuthContext";
import { onValue, ref, update } from "firebase/database";
import { realtimeDatabase } from "../../configs/firebase-config";
import { Link } from "react-router-dom";

export const Address = () => {
  const [allAddresses, setAllAddresses] = useState([]);
  const { user } = UserAuth();
  useEffect(() => {
    if (user) {
      const userDatabaseRef = ref(realtimeDatabase, `users/${user.uid}`);
      onValue(userDatabaseRef, (snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          console.log("userData");
          console.log(userData);
          setAllAddresses(userData.addresses || []);
        }
      });
    }
  }, [user]);

  const updateAddresses = (newAddresses) => {
    if (user) {
      const userDatabaseRef = ref(realtimeDatabase, `users/${user.uid}`);
      // update(realtimeDatabase,{
      //   addresses: newAddresses
      // });
      update(userDatabaseRef, { addresses: newAddresses })
        .then(() => {
          alert("Updated address successfully");
        })
        .catch((error) => {
          alert("Error updating:", error);
        });
    }
  };
  const handleRemoveAddress = (index) => {
    setAllAddresses(allAddresses.splice(index, 1));
    updateAddresses(allAddresses.splice(index, 1));
  };
  return (
    <div className="pt-[55px]">
      <Navbar></Navbar>
      <div className="grid grid-cols-6 px-4 sm:px-9 mb-[100px]">
        <div className="hidden lg:col-span-1 lg:flex mt-[45px] ml-3">
          <NavigationSide></NavigationSide>
        </div>
        <div className="col-span-6 lg:col-span-4 pl-3 flex justify-center min-h-[75vh]">
          <div className="mt-[35px]">
            <div className="max-w-[480px]">
              <h1 className="text-base text-center mb-[60px]">
                Saved addresses
              </h1>
              <ul className="mb-10">
                {allAddresses.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`text-xs ${
                        index > 0 ? "mt-10" : ""
                      } grid place-items-center`}
                    >
                      <p className="font-bold">
                        {item.firstName + " " + item.lastName}
                      </p>
                      <p>{item.streetAddress}</p>
                      <p>{item.city + ", " + item.state}</p>
                      <p>{item.country + ", " + item.postalCode}</p>
                      <p className="font-bold">
                        {item.defaultBillingAddress &&
                          "Default Billing Address"}
                      </p>
                      <p className="font-bold">
                        {item.defaultShippingAddress &&
                          "Default Shipping Address"}
                      </p>
                      <div className="w-full flex justify-around mt-2.5">
                        <Link
                          to={`/account/addresses/edit/${index}`}
                          state={{ index }}
                          className="uppercase"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => {
                            handleRemoveAddress(index);
                          }}
                          className="uppercase"
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <Link
                to="/account/addresses/new"
                className="text-xs min-w-[140px] uppercase font-bold px-[30px] py-[6px] bg-black text-white"
              >
                Add new address
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
