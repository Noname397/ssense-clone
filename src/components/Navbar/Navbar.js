import "./Navbar.css";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
const Navbar = () => {
  return (
    <header className="bg-white px-9 h-[55px] flex justify-between items-center min-w-[370px]">
      <div className="w-[60px] flex justify-between lg:hidden">
        <AiOutlineMenu size={25}></AiOutlineMenu>
        <AiOutlineSearch size={25}></AiOutlineSearch>
      </div>

      <ul className="hidden lg:flex w-[40%] justify-between min-w-[450px]">
        <li className="px-2 text-[11px]">
        <a href="#" class="group transition duration-300">
            MENSWEAR
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </a>
        </li>
        <li className="px-2 text-[11px]">
            <a href="#" class="group transition duration-300">
            WOMENSWEAR
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </a>
        </li>
        <li className="px-2 text-[11px] invisible md:visible">
        <a href="#" class="group transition duration-300">
            EVERYTHING ELSE
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </a>
        </li>
        <li className="px-2 text-[11px] ">
        <a href="#" class="group transition duration-300">
            SEARCH
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </a>
        </li>
        <li className="px-2 text-[11px] invisible xl:visible">
        <a href="#" class="group transition duration-300">
            SALES
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </a>
          </li>
      </ul>

      <a href="" className="block">
        <img
          className="h-[21px]"
          src="//res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg"
          alt="SSENSE"
        />
      </a>

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
          <a href="#" class="group transition duration-300">
            LOGIN
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </a>
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
        <AiOutlineUser size={25}></AiOutlineUser>
        <div className="flex relative">
          <HiOutlineShoppingBag size={25}></HiOutlineShoppingBag>
          <span className="text-[10px] absolute top-[35%] left-[39%]">0</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
