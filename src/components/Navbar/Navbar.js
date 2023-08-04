import { useState, useContext, useEffect, useMemo } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import { UserCart } from "../../contexts/CartContext";
import { DropdownAccount } from "./DropdownAccount";
const Navbar = () => {
  const { user, setUser, login, logout } = UserAuth();
  const { totalItems } = UserCart();
  const [dropdownAccount, setDropdownAccount] = useState(false);
  // const [totalItems, setTotalItems] = useState(0);
  // useEffect(() => {
  //   setTotalItems(
  //     cart
  //       .map((item) => item.quantity)
  //       .reduce((accumulator, currentValue) => {
  //         return accumulator + currentValue;
  //       }, 0)
  //   );
  // }, [cart]);
  const [mobileMenu, setMobileMenu] = useState(false);
  function menuHandlder() {
    setMobileMenu(!mobileMenu);
  }
  const [searchMenu, setSearchMenu] = useState(false);
  function searchHandler() {
    setSearchMenu(!searchMenu);
  }
  return (
    <div className="w-full fixed top-0 left-0">
      <header className="bg-white h-[55px] flex justify-between items-center w-full px-4 sm:px-9 relative">
        <div className="grid grid-cols-2 gap-x-1 lg:hidden">
          <Link>
            <AiOutlineMenu
              size={30}
              onClick={() => {
                setSearchMenu(false);
                menuHandlder();
              }}
            ></AiOutlineMenu>
          </Link>
          <Link>
            <AiOutlineSearch
              size={30}
              onClick={() => {
                setMobileMenu(false);
                searchHandler();
              }}
            ></AiOutlineSearch>
            {searchMenu && (
              <div className="absolute top-[55px] left-0 w-full">
                <SearchBar state={searchMenu} handler={searchHandler} />
              </div>
            )}
          </Link>
        </div>

        <ul className="hidden lg:flex w-[40%] justify-between relative">
          <li className="px-2 text-[11px]">
            <Link to="/products" className="group">
              PRODUCTS
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </Link>
          </li>

          <li className="px-2 text-[11px]">
            <Link onClick={searchHandler} className="group">
              SEARCH
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </Link>
            {searchMenu && (
              <div
                className={`absolute top-[30px] left-0 ${
                  searchMenu ? "border border-black" : ""
                } w-[450px]`}
              >
                {searchMenu && (
                  <SearchBar
                    state={searchMenu}
                    handler={searchHandler}
                  ></SearchBar>
                )}
              </div>
            )}
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

        <Link to="/" className="block">
          <img
            className="h-[21px]"
            src="//res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg"
            alt="SSENSE"
          />
        </Link>

        <ul className="hidden lg:flex w-[40%] justify-between">
          <li className="px-2 text-[11px]">
            {!user ? (
              <Link to="/login" className="group">
                LOGIN
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </Link>
            ) : (
              <Link
                to="/account/account-details"
                className="group uppercase relative"
                
                onMouseEnter={() => {
                  setDropdownAccount(true);
                }}
                onMouseLeave={()=> {
                  setDropdownAccount(false)
                }}
              >
                Account
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                <div className={`${dropdownAccount ? 'block' : 'hidden'}`}>
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
          <Link to="/account">
            <AiOutlineUser size={30}></AiOutlineUser>
          </Link>
          <Link to="/shopping-cart" className="flex relative">
            <HiOutlineShoppingBag size={30}></HiOutlineShoppingBag>
            <div className="absolute top-[12px] left-[9px] flex items-start justify-center w-3 ">
              <span className="text-[10px]">{totalItems}</span>
            </div>
          </Link>
        </div>
      </header>
      {mobileMenu && (
        <ul className="lg:hidden absolute bg-white w-full p-0">
          <li className="pb-[25px] pl-9">
            <Link to="/products">ALL PRODUCTS</Link>
          </li>
          <li className="pb-[25px] pl-9">
            <a href="">SHOPPING BAG</a>
          </li>
          <li className="pb-[25px] pl-9">
            <a href="">LOGIN</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
