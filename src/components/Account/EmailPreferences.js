import { useEffect, useState } from "react";
import { onValue, ref, update } from "firebase/database";
import { realtimeDatabase } from "../../configs/firebase-config";
import { UserAuth } from "../../contexts/AuthContext";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { NavigationSide } from "./NavigationSide";
import { Country, State, City } from "country-state-city";

export const EmailPreference = () => {
  const { user } = UserAuth();
  const [emailPreference, setEmailPreference] = useState({});
  useEffect(() => {
    if (user) {
      const userDatabaseRef = ref(realtimeDatabase, `users/${user.uid}`);
      onValue(userDatabaseRef, (snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          console.log(userData.emailPreference.country)
          setEmailPreference(userData.emailPreference || {});
        }
      });
    }
  }, [user]);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = () => {
      let countriesData = Country.getAllCountries();
      setCountries(countriesData)
      //console.log(countriesData)
    };

    fetchCountries();
  }, []);

  const handleEmailPreference = () => {
    if (user){
    const userDatabaseRef = ref(realtimeDatabase, `users/${user.uid}`);
    update(userDatabaseRef, { emailPreference })
      .then(() => {
        alert("Updated email preference successfully");
      })
      .catch((error) => {
        alert("Error updating:", error);
      });
    }
  };
  return (
    <div className="pt-[55px]">
      <Navbar></Navbar>
      <div className="grid grid-cols-6 px-4 sm:px-9 mb-[100px]">
        <div className="hidden lg:col-span-1 lg:flex mt-[45px] ml-3">
          <NavigationSide></NavigationSide>
        </div>
        <div className="col-span-6 lg:col-span-4 pl-3 flex justify-center min-h-[75vh]">
          <div className="text-xs max-w-[480px] mt-[35px]">
            <h1 className="text-base text-center mb-[25px]">
              Email preferences
            </h1>
            <div>
              <h2 className="text-sm">Newsletters</h2>
              <div className="min-[450px]:flex w-full mt-2.5 mb-5">
                <div className="flex w-1/4 ">
                  <input
                    type="radio"
                    name="newslatter"
                    id="subscribed"
                    checked={emailPreference.newsletterSubscription === true}
                    onChange={() =>
                      setEmailPreference({
                        ...emailPreference,
                        newsletterSubscription: true,
                      })
                    }
                    className=" checked:text-black checked:hover:text-black focus:text-black focus:outline-none focus:ring-0 focus:ring-black checked:focus:text-black checked:active:text-black"
                  />
                  <label htmlFor="subscribed" className="pl-[14px]">
                    Subscribed
                  </label>
                </div>
                <div className="flex w-1/4 min-[450px]:ml-3 max-[450px]:mt-2">
                  <input
                    type="radio"
                    name="newslatter"
                    id="unsubscribed"
                    value={false}
                    checked={emailPreference.newsletterSubscription === false}
                    onChange={() =>
                      setEmailPreference({
                        ...emailPreference,
                        newsletterSubscription: false,
                      })
                    }
                    className="checked:text-black checked:hover:text-black focus:text-black focus:outline-none focus:ring-0 focus:ring-black checked:focus:text-black checked:active:text-black"
                  />
                  <label htmlFor="unsubscribed" className="pl-[14px]">
                    Unsubscribed
                  </label>
                </div>
              </div>
              <h4>
                Sign up for email updates and promotions, tailored to your
                preferences.
              </h4>
            </div>
            <div>
              <h2 className="text-base mt-5">Preferences</h2>

              <div>
                <h3 className="mt-5 mb-2.5">Language</h3>
                <select
                  id="email-preferences-language"
                  className="w-full border-[0.8px] border-black min-h-[30px] text-xs"
                >
                  <option value="English">English</option>
                </select>
              </div>
            </div>
            <div className="mb-5">
              <h3 className="mt-5 mb-2.5">Country</h3>
              <select
                id="email-preferences-country"
                className="w-full border-[0.8px] border-black min-h-[30px] text-xs"
                onChange={(e) => {
                  setEmailPreference({
                    ...emailPreference,
                    country: e.target.value,
                  });
                }}
                value={emailPreference.country}
              >
                {countries.map((item, index) => {
                  return (
                    <option value={item.isoCode} key={index}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <h3 className="mt-2.5 mb-2.5 text-base">Email notification</h3>
              <div className="min-[450px]:flex w-full mb-5">
                <div className="flex min-[450px]:w-1/4">
                  <input
                    type="radio"
                    name="email-notification"
                    id="on"
                    className="checked:bg-black checked:hover:text-black focus:text-black focus:outline-none focus:ring-1 focus:ring-black checked:focus:text-black checked:active:text-black"
                    onChange={() => {
                      setEmailPreference({
                        ...emailPreference,
                        emailNotification: true,
                      });
                    }}
                    checked={emailPreference.emailNotification === true}
                  />
                  <label htmlFor="on" className="pl-[14px]">
                    On
                  </label>
                </div>
                <div className="flex min-[450px]:w-1/4 max-[450px]:mt-2">
                  <input
                    type="radio"
                    name="email-notification"
                    id="off"
                    onChange={() => {
                      setEmailPreference({
                        ...emailPreference,
                        emailNotification: false,
                      });
                    }}
                    checked={emailPreference.emailNotification === false}
                    className="checked:text-black checked:hover:text-black focus:text-black focus:outline-none focus:ring-1 focus:ring-black checked:focus:text-black checked:active:text-black"
                  />
                  <label htmlFor="off" className="pl-[14px]">
                    Off
                  </label>
                </div>
              </div>
              <h4 className="mt-2.5 mb-2.5">
                Sign up for notifications about products in your Wishlist and
                Shopping Bag.
              </h4>
            </div>
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                onClick={() => {
                  handleEmailPreference();
                }}
                className="w-[200px] px-7.5 py-[6px] bg-black text-white"
              >
                SAVE CHANGES
              </button>
            </div>
            <div className="mt-10">
              <p className="mb-2.5">
                When you create an SSENSE account, we collect your email and
                personal data to enhance your shopping experience and, subject
                to your agreement, to provide you with exclusive email updates,
                promotions, and notifications.
              </p>
              <p>You may unsubscribe at any time.</p>
              <p>To find out more, please visit our Privacy Policy.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
