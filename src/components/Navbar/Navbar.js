import { useState } from "react";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import { UserCart } from "../../contexts/CartContext";
import { DropdownAccount } from "./DropdownAccount";
import { MdOutlineArrowForwardIos } from "react-icons/md";
const Navbar = () => {
  const navigate = useNavigate()
  const { user,logout } = UserAuth();
  const { totalItems } = UserCart();
  const [dropdownAccount, setDropdownAccount] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileAccount, setMobileAccount] = useState(false);
  const [languageMobileMenu,setLanguageMobileMenu] = useState(false);

  return (
    <div className="w-full fixed z-50 top-0 left-0">
      <header className="bg-white h-[55px] flex justify-between items-center w-full px-4 sm:px-9 relative">
        <div className="grid grid-cols-2 gap-x-1 lg:hidden">
          <Link>
            <AiOutlineMenu
              size={30}
              onClick={() => {
                setMobileMenu(!mobileMenu);
                setMobileAccount(false);
              }}
            ></AiOutlineMenu>
          </Link>
        </div>

        <ul className="hidden lg:flex w-[40%] justify-between relative">
          <li className="px-2 text-[11px]">
            <Link to="/products" className="group">
              PRODUCTS
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </Link>
          </li>

          <li className="px-2 text-[11px] relative">
            <a href="#" className="group">
              ENGLISH
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </a>
          </li>
          <li className="px-2 text-[11px] invisible">
            <Link className="group">
              EVERYTHING ELSE
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </Link>
          </li>
        </ul>

        <Link
          to="/"
          onClick={() => {
            setMobileAccount(false);
            setMobileMenu(false);
          }}
          className="block"
        >
          <img
            className="h-[21px]"
            src="//res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg"
            alt="SSENSE"
          />
        </Link>

        <ul className="hidden lg:flex w-[40%] justify-between relative">
        <li className="px-2 text-[11px] invisible">
            <Link className="group">
              EVERYTHING ELSE
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </Link>
          </li>

          <li className="px-2 text-[11px]">
            {!user ? (
              <Link to="/login" className="group">
                LOGIN
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </Link>
            ) : (
              <Link
                to="/account/account-details"
                className="group uppercase"
                onMouseEnter={() => {
                  setDropdownAccount(true);
                }}
                onMouseLeave={() => {
                  setDropdownAccount(false);
                }}
              >
                Account
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                <div className={`${dropdownAccount ? "block" : "hidden"}`}>
                  <DropdownAccount></DropdownAccount>
                </div>
              </Link>
            )}
          </li>

          <li className="px-2 text-[11px]">
            <Link to="/shopping-cart">
              SHOPPING CART
              <span>({totalItems})</span>
            </Link>
          </li>

        </ul>

        <div className="min-w-[60px] flex justify-between lg:hidden">
          <div>
            {!user && (
              <Link to="/login">
                <AiOutlineUser size={30}></AiOutlineUser>
              </Link>
            )}
            {user && (
              <Link
                onClick={() => {
                  setMobileAccount(!mobileAccount);
                  setMobileMenu(false);
                }}
              >
                <AiOutlineUser size={30}></AiOutlineUser>
              </Link>
            )}
          </div>

          <Link to="/shopping-cart" className="flex relative">
            <HiOutlineShoppingBag size={30}></HiOutlineShoppingBag>
            <div className="absolute top-[12px] left-[9px] flex items-start justify-center w-3 ">
              <span className="text-[10px]">{totalItems}</span>
            </div>
          </Link>
        </div>
      </header>
      {mobileMenu && (
        <ul className="lg:hidden bg-white fixed w-full h-full p-0 top-0 z-51 overflow-hidden transition-transform ease-in-out duration-500 transform translate-x-4">
          <li className="pt-3 pb-10 px-9 flex justify-end uppercase">
            <Link onClick={() => {
              setMobileMenu(false);
            }}>close</Link>
          </li>
          <li className="py-3 px-9">
            <Link to="/products">ALL PRODUCTS</Link>
          </li>
          <li className="py-3 px-9">
            <Link to="/shopping-cart">SHOPPING CART</Link>
          </li>
          <li className="py-3 px-9">
            {!user && <Link to="/login">LOGIN</Link>}
            {user && (
              <Link
                onClick={() => {
                  setMobileMenu(false);
                  setMobileAccount(true);
                }}
              >
                <p className="flex justify-between">
                {" "}
                Welcome - {user.email}{" "}
                <MdOutlineArrowForwardIos />
                </p>
              </Link>
            )}
          </li>
          <li className="py-3 px-9 uppercase">
            <Link className="flex justify-between" onClick={() => {
              setLanguageMobileMenu(true);
            }}> <p>Language - English</p>  <MdOutlineArrowForwardIos /></Link>
          </li>
          <li className="py-3 px-9 uppercase">
            Customer Care
          </li>
        </ul>
      )}

      {mobileAccount && (
        <ul className="lg:hidden bg-white fixed w-full h-full p-0 top-0 z-51 overflow-hidden">
          <li className="pt-3 pb-10 px-9 flex justify-end uppercase">
            <ul className="flex w-full justify-between">
              <li onClick={() => {
                setMobileAccount(false);
                setMobileMenu(true);
              }}>
                <Link>
                Back
                </Link>
                </li>
              <li className="text-[#888888]">Account</li>
              <li onClick={() => {
                setMobileAccount(false);
                setMobileMenu(false);
              }}>
                <Link>Close</Link>
                </li>
            </ul>
          </li>
          <li className="py-3 px-9">
            <Link to="/account/order-history">ORDER HISTORY</Link>
          </li>
          <li className="py-3 px-9">
            <Link to="/account/account-details" className="capitalize">ACCOUNT DETAILS</Link>
          </li>
          <li className="py-3 px-9">
            <Link to="/account/email-preference" className="capitalize">EMAIL PREFERENCE</Link>
          </li>
          <li className="py-3 px-9">
            <Link to="/account/addresses" className="capitalize">ADDRESSES</Link>
          </li>
          <li className="py-3 px-9">
            <a
              href="/"
              onClick={() => {
                logout();
                setMobileAccount(false);
                setMobileMenu(false)
              }}
              className="capitalize"
            >
              LOG OUT
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
