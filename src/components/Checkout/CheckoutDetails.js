import { useEffect, useState } from "react";
import { realtimeDatabase } from "../../configs/firebase-config";
import { UserAuth } from "../../contexts/AuthContext";
import { onValue, ref } from "firebase/database";
import { UserCart } from "../../contexts/CartContext";

export const CheckoutDetails = () => {
  const { cart, totalItems, totalCost } = UserCart();
  const { user } = UserAuth();
  const [allAddresses, setAllAddresses] = useState([]);
  const [country, setCountry] = useState("");
  useEffect(() => {
    if (user) {
      const userDatabaseRef = ref(realtimeDatabase, `users/${user.uid}`);
      onValue(userDatabaseRef, (snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          console.log("address");
          console.log(userData);
          setAllAddresses(userData.addresses || []);
          setCountry(userData.emailPreference.country);
        }
      });
    }
  }, [user]);

  useEffect(() => {
    console.log(allAddresses);
  }, [allAddresses]);
  return (
    <div className="min-h-[85vh] px-4 sm:px-9 text-xs">
      <form
        action=""
        className="grid grid-cols-1 lg:grid-cols-10 lg:gap-x-[96px]"
      >
        <div className="col-span-1 lg:col-span-7">
          <h2 className="mb-5 text-xs uppercase border-b-[0.8px] border-b-[#ccc] pb-[7px] h-fit ">
            <span>Shipping address</span>
            <span>Use other address +</span>
          </h2>
          <div className="mb-5">
            {allAddresses.map((item) => {
              return (
                <div>
                  <p>{item.firstName + " " + item.lastName}</p>
                  <p>{item.streetAddress}</p>
                  <p>{item.city + ", " + item.state}</p>
                  <p>{item.country + ", " + item.postalCode}</p>
                </div>
              );
            })}
          </div>

          <div>
            <h2 className="col-span-1 text-xs uppercase mb-5 border-b-[0.8px] border-b-[#ccc] pb-[7px] h-fit ">
              Shipping method
            </h2>
            <div className="flex mb-5">
              <input
                type="radio"
                name="shipping-method"
                id=""
                className="mr-3 checked:text-black checked:hover:text-black focus:text-black focus:outline-none focus:ring-1 focus:ring-black checked:focus:text-black checked:active:text-black"
              />
              <label htmlFor="">$0.00 USD | 4 - 5 days | Standard</label>
            </div>
            <div className="flex mb-5">
              <input
                type="radio"
                name="shipping-method"
                id=""
                className="mr-3 checked:text-black checked:hover:text-black focus:text-black focus:outline-none focus:ring-1 focus:ring-black checked:focus:text-black checked:active:text-black"
              />
              <label htmlFor="">$0.00 USD | 2 days | Priority</label>
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-3">
          <div>
            <h2 className="col-span-1 text-xs uppercase pb-[7px] h-fit ">
              order summary - ({totalItems}) item
            </h2>
            {cart.map((item, index) => {
              return (
                <div
                  key={index}
                  className="border-t-[0.8px] border-[#ccc] py-5 text-xs"
                >
                  <div className="h-[120px] flex">
                    <div className="h-full">
                      <img
                        src={item.product?.imgPreview}
                        className="h-full"
                        alt=""
                      />
                    </div>
                    <div className="relative w-full ml-5">
                      <p>{item.product?.brand}</p>
                      <p>{item.product?.name}</p>
                      <p>${item.product?.price}</p>
                      <p>Quantity: {item?.quantity}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <h2 className="col-span-1 my-5 text-xs uppercase border-b-[0.8px] border-b-[#ccc] pb-[7px] h-fit ">
              Country/region: {country}/USD
            </h2>
            <div className="flex justify-between">
              <span>Total</span>
              <span>${totalCost}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping total</span>
              <span>(free)</span>
            </div>
            <div className="flex justify-between pt-5 my-5 border-t-[0.8px] border-t-[#ccc]">
              <span>Order total(USD)</span>
              <span>${totalCost}</span>
            </div>
          </div>
          <button type="submit" className="bg-black text-white h-[35px] w-full">
            PLACE ORDER
          </button>
        </div>
      </form>
    </div>
  );
};
