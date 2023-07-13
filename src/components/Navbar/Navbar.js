import { useState, useContext, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
const Navbar = () => {
  const [user, setUser, login, logout] = useContext(AuthContext);
  useEffect(() => {
    const userData = window.localStorage.getItem("userInfo");
    setUser(JSON.parse(userData));
  }, []);
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
              size={25}
              onClick={() => {
                setSearchMenu(false);
                menuHandlder();
              }}
            ></AiOutlineMenu>
          </Link>
          <Link>
            <AiOutlineSearch
              size={25}
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

        <ul className="hidden lg:flex w-[40%] justify-between min-w-[450px] relative">
          <li className="px-2 text-[11px]">
            <Link to="/men" class="group transition duration-300">
              MENSWEAR
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </Link>
          </li>
          <li className="px-2 text-[11px]">
            <Link to="/women" class="group transition duration-300">
              WOMENSWEAR
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </Link>
          </li>
          <li className="px-2 text-[11px] invisible md:visible">
            <Link to="/everything-else" class="group transition duration-300">
              EVERYTHING ELSE
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </Link>
          </li>
          <li className="px-2 text-[11px]">
            <Link onClick={searchHandler} class="group transition duration-300">
              SEARCH
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
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
          <li className="px-2 text-[11px] invisible xl:visible">
            <a href="#" class="group transition duration-300">
              SALES
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </a>
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
          <li className="px-2 text-[11px] invisible">
            <a href="#" class="group transition duration-300">
              ENGLISH
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </a>
          </li>
          <li className="px-2 text-[11px] relative">
            <a href="#" class="group transition duration-300">
              ENGLISH
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </a>
            <ul className="hidden absolute top-[20px] right-0 w-full border-solid border-2 border-[#888]">
              <li className="px-2 py-1">ENGLISH</li>
              <li className="px-2 py-1">Français</li>
              <li className="px-2 py-1">日本語</li>
              <li className="px-2 py-1">中文</li>
              <li className="px-2 py-1"> 한국어</li>
            </ul>
          </li>
          <li className="px-2 text-[11px]">
            {!user ? (
              <Link to="/login" class="group transition duration-300">
                LOGIN
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </Link>
            ) : (
              <Link to="/account" className="uppercase">
                {" "}
                Account{" "}
              </Link>
            )}
          </li>
          <li className="px-2 text-[11px]">
            <a href="#" class="group transition duration-300">
              WISHLIST
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </a>
          </li>
          <li className="px-2 text-[11px]">
            <a href="#">
              SHOPPING CART
              <span>(0)</span>
            </a>
          </li>
        </ul>

        <div className="min-w-[60px] flex justify-between lg:hidden">
          <Link to="/account">
            <AiOutlineUser size={25}></AiOutlineUser>
          </Link>
          <Link to="/shopping-cart" className="flex relative">
            <HiOutlineShoppingBag size={25}></HiOutlineShoppingBag>
            <span className="text-[10px] absolute top-[35%] left-[39%]">0</span>
          </Link>
        </div>
      </header>
      {mobileMenu && (
        <ul className="lg:hidden absolute bg-white w-full p-0">
          <li className="pb-[25px] pl-9">
            <a href="">MENSWEAR</a>
          </li>
          <li className="pb-[25px] pl-9">
            <a href="">WOMENSWEAR</a>
          </li>
          <li className="pb-[25px] pl-9">
            <a href="">EVERYTHING ELSE</a>
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
