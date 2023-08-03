import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { NavigationSide } from "./NavigationSide";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import { realtimeDatabase } from "../../configs/firebase-config";
import { UserAuth } from "../../contexts/AuthContext";
import { onValue, ref, update } from "firebase/database";
import { Address } from "./Address";
export const NewAddress = () => {
  const navigate = useNavigate();
  const { user } = UserAuth();
  const [allAddresses, setAllAddresses] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [defaultShippingAddress, setDefaultShippingAddress] = useState(false);
  const [defaultBillingAddress, setDefaultBillingAddress] = useState(false);
  const [submit, setSubmit] = useState(false);
  useEffect(() => {
    let countriesData = Country.getAllCountries();
    setCountries(countriesData);
    if (user) {
      const userDatabaseRef = ref(realtimeDatabase,`users/${user.uid}`);
      onValue(userDatabaseRef,(snapshot) =>{
        if (snapshot.exists()){
          const userData = snapshot.val();
          setAllAddresses(userData.addresses|| [])
        }
      })
    } 
    
  }, []);

  useEffect(() => {
    console.log(country);
    const statesData = State.getStatesOfCountry(country);
    console.log(statesData);
    setStates(statesData);
  }, [country]);

  const NewAddress = {
    firstName: firstName,
    lastName: lastName,
    company: company,
    streetAddress: streetAddress,
    country: country,
    state: state,
    city: city,
    postalCode: postalCode,
    phone: phone,
    defaultBillingAddress: defaultBillingAddress,
    defaultShippingAddress: defaultShippingAddress,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(NewAddress);
    setSubmit(true);
    if (
      user &&
      firstName.length > 0 &&
      lastName.length > 0 &&
      streetAddress.length > 0 &&
      country.length > 0 &&
      state.length > 0 &&
      postalCode.length > 0 &&
      phone.length > 7
    ) {
      const userDatabaseRef = ref(realtimeDatabase, `users/${user.uid}`);
      onValue(userDatabaseRef, (snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          setAllAddresses(userData.addresses || []);
        }
      });
      const newAllAddresses = [...allAddresses, NewAddress]; // temporary
      console.log("all addressese new");
      console.log(newAllAddresses);
      // setAllAddresses(newAllAddresses);
      update(userDatabaseRef, { addresses: [...allAddresses, NewAddress] });
      // if (defaultBillingAddress === true) {
      //   // // setDefaultBillingAddress(NewAddress);
      //   // setDefaultBillingAddress()
      //   update(userDatabaseRef, {defaultBillingAddress: NewAddress});
      // }
      // if (defaultShippingAddress === true) {
      //   // setDefaultShippingAddress(NewAddress);
      //   // update(userDatabaseRef, {defaultShippingAddress});
      //   update(userDatabaseRef, {defaultShippingAddress: NewAddress});
      // }
      alert("Update address successful");
      navigate("/account/addresses");
    }
  };
  return (
    <div className="mt-[55px]">
      <Navbar></Navbar>
      <div className="grid grid-cols-6 px-4 sm:px-9 mb-[100px]">
        <div className="col-span-1 flex mt-[45px] ml-3">
          <NavigationSide></NavigationSide>
        </div>
        <div className="col-span-4 pl-3 flex justify-center min-h-[75vh]">
          <div className="mt-[35px]">
            <form className="min-w-[480px]">
              <h1 className="text-base text-center mb-[25px]">
                Add an address
              </h1>
              <div className="flex flex-col">
                <label
                  className="text-xs mb-[5px]"
                  htmlFor="new-address-first-name"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="new-address-first-name"
                  onChange={(e) => setFirstName(e.target.value)}
                  className={`text-xs w-full ${
                    submit === true && firstName.length === 0
                      ? "border-red-600 focus:border-red-600"
                      : "border-black focus:border-black"
                  } border-[0.8px] focus:ring-0 h-[30px] outline-none px-1.5 mb-5`}
                />
                {submit === true && firstName.length === 0 && (
                  <p className="mt-[-15px] mb-2.5 text-xs text-red-600">
                    Please fill out this field.
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  className="text-xs mb-[5px]"
                  htmlFor="new-address-last-name"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="new-address-last-name"
                  onChange={(e) => setLastName(e.target.value)}
                  className={`text-xs w-full ${
                    submit === true && lastName.length === 0
                      ? "border-red-600 focus:border-red-600"
                      : "border-black focus:border-black"
                  } border-[0.8px] focus:ring-0 h-[30px] outline-none px-1.5 mb-5`}
                />
                {submit === true && lastName.length === 0 && (
                  <p className="mt-[-15px] text-xs mb-2.5 text-red-600">
                    Please fill out this field.
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  className="text-xs mb-[5px]"
                  htmlFor="new-address-company"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="new-address-company"
                  onChange={(e) => setCompany(e.target.value)}
                  className="text-xs w-full border-black border-[0.8px] focus:ring-0 focus:border-black h-[30px] outline-none px-1.5 mb-5"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-xs mb-[5px]"
                  htmlFor="new-address-street"
                >
                  Street address
                </label>
                <input
                  type="text"
                  id="new-address-street"
                  onChange={(e) => setStreetAddress(e.target.value)}
                  className={`text-xs w-full ${
                    submit === true && streetAddress.length === 0
                      ? "border-red-600 focus:border-red-600"
                      : "border-black focus:border-black"
                  } border-[0.8px] focus:ring-0 h-[30px] outline-none px-1.5 mb-5`}
                />
                {submit === true && streetAddress.length === 0 && (
                  <p className="mt-[-15px] mb-2.5 text-xs text-red-600">
                    Please fill out this field.
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  className="text-xs mb-[5px]"
                  htmlFor="new-address-country"
                >
                  Country/Region
                </label>
                <select
                  id="new-address-country"
                  className={`w-full border-black focus:border-black border-[0.8px] focus:ring-0 min-h-[30px] text-xs mb-5`}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                >
                  <option disabled selected>
                    Select
                  </option>
                  {countries.map((item, index) => {
                    return (
                      <option value={item.isoCode} key={index}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                {submit === true && country.length === 0 && (
                  <p className="mt-[-15px] mb-2.5 text-xs  text-red-600">
                    Please fill out this field.
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  className="text-xs mb-[5px]"
                  htmlFor="addresses-form-province-input"
                >
                  State/Province
                </label>
                <select
                  className="w-full border-[0.8px] border-black min-h-[30px] text-xs mb-5"
                  id="addresses-form-province-input"
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                >
                  <option disabled selected>
                    Select
                  </option>
                  {states.map((item, index) => {
                    return (
                      <option value={item.isoCode} key={index}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                {submit === true && state.length === 0 && (
                  <p className="mt-[-15px] mb-2.5 text-xs  text-red-600">
                    Please fill out this field.
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="text-xs mb-[5px]" htmlFor="new-address-city">
                  City
                </label>
                <input
                  type="text"
                  id="new-address-city"
                  onChange={(e) => setCity(e.target.value)}
                  className={`text-xs w-full ${
                    submit === true && city.length === 0
                      ? "border-red-600 focus:border-red-600"
                      : "border-black focus:border-black"
                  } border-[0.8px] focus:ring-0 h-[30px] outline-none px-1.5 mb-5`}
                />
                {submit === true && city.length === 0 && (
                  <p className="mt-[-15px] mb-2.5 text-xs  text-red-600">
                    Please fill out this field.
                  </p>
                )}
              </div>
              <div className="flex">
                <div className="flex flex-col w-1/2">
                  <label
                    className="text-xs mb-[5px]"
                    htmlFor="new-address-postal"
                  >
                    ZIP or postal code
                  </label>
                  <input
                    type="text"
                    id="new-address-postal"
                    onChange={(e) => setPostalCode(e.target.value)}
                    className={`text-xs w-full ${
                      submit === true && postalCode.length === 0
                        ? "border-red-600 focus:border-red-600"
                        : "border-black focus:border-black"
                    } border-[0.8px] h-[30px] focus:ring-0 outline-none px-1.5 mb-5`}
                  />
                  {submit === true && postalCode.length === 0 && (
                    <p className="mt-[-15px] mb-2.5 text-xs  text-red-600">
                      Please fill out this field.
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-1/2 pl-3">
                  <label
                    className="text-xs mb-[5px]"
                    htmlFor="new-address-phone"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="new-address-phone"
                    onChange={(e) => setPhone(e.target.value)}
                    className={`text-xs w-full ${
                      submit === true && phone.length < 7
                        ? "border-red-600 focus:border-red-600"
                        : "border-black focus:border-black"
                    } border-[0.8px] focus:ring-0 h-[30px] outline-none px-1.5 mb-5`}
                  />
                  {submit === true && phone.length === 0 && (
                    <p className="mt-[-15px] mb-2.5 text-xs  text-red-600">
                      Please fill out this field.
                    </p>
                  )}
                  {submit === true && phone.length > 0 && phone.length < 7 && (
                    <p className="mt-[-15px] mb-2.5 text-xs  text-red-600">
                      Please enter at least 7 characters.
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-[5px]">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-3 checked:text-black checked:hover:text-black focus:text-black focus:outline-none focus:ring-1 focus:ring-black checked:focus:text-black checked:active:text-black"
                  onChange={() => {
                    setDefaultBillingAddress(!defaultBillingAddress);
                  }}
                />
                <label htmlFor="billingAddress" className="text-xs ">
                  Set as default billing address
                </label>
              </div>
              <div className="mb-5">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-3 checked:text-black checked:hover:text-black focus:text-black focus:outline-none focus:ring-1 focus:ring-black checked:focus:text-black checked:active:text-black"
                  onChange={() => {
                    setDefaultShippingAddress(!defaultShippingAddress);
                  }}
                />
                <label htmlFor="shippingAddress" className="text-xs">
                  Set as default shipping address
                </label>
              </div>
              <div className="grid place-items-center">
                <div>
                  <Link
                    to="/account/addresses"
                    className="inline-block text-center text-xs w-[140px] px-7.5 py-[6px] bg-white text-black border border-black"
                  >
                    Cancel
                  </Link>
                  <button
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                    className="text-xs min-w-[140px] px-7.5 py-[6px] bg-black text-white border border-black ml-3"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
