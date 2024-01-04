import { useState } from "react";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  const [focusedInput, setFocusedInput] = useState(false);
  const year = new Date().getFullYear();
  return (
    <div className="lg:px-[42px] border-t-[0.8px] border-[#ccc] lg:border-none px-4 sm:px-9">
      <nav className="mt-2.5 lg:mt-0">
        <ul className="hidden lg:flex lg:justify-between">
          <li className="text-xs group transition duration-300">
            <a href="">COUNTRY/REGION: VIETNAM</a>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
          <li className="text-xs group transition duration-300">
            <a href="">NEWSLETTER SIGNUP</a>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
          <li className="text-xs group transition duration-300">
            <a href="">CUSTOMER CARE</a>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
          <li className="text-xs group transition duration-300">
            <a href="">LOCATION</a>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
          <li className="text-xs group transition duration-300">
            <a href="">EDITORIAL ARCHIVE</a>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
          <li className="text-xs group transition duration-300">
            <a href="">CAREERS</a>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
          <li className="text-xs group transition duration-300">
            <a href="">AFFILIATES</a>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
          <li className="text-xs group transition duration-300">
            <a href="">SITEMAPS</a>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
        </ul>
        <ul className="flex flex-col items-center lg:hidden">
          <h4 className="pb-2.5 text-xs">NEWSLETTER SIGNUP</h4>
          <p className="pb-5 text-xs">
            Sign up for email updates and promotions
          </p>
          <form className="w-full sm:w-[300px]">
            <input
              type="email"
              placeholder="Email address"
              className="block w-full h-[30px] border-[0.8px] px-1.5 border-black outline-none focus:ring-0 focus:border-black text-xs"
              onFocus={() => setFocusedInput(true)}
            />
            <div
              className={`flex justify-around ${
                focusedInput ? "block mt-2.5 mb-2.5" : "hidden"
              }`}
            >
              <div>
                <input className="mr-3 checked:text-black checked:hover:text-black focus:text-black focus:outline-none focus:ring-0 focus:ring-black checked:focus:text-black checked:active:text-black"  type="radio" name="clothes-type" id="menswear" />
                <label id="menswear" className="text-xs capitalize" name="clothes-type" >
                  Menswear
                </label>
              </div>
              <div>
                <input type="radio" className="mr-3 checked:text-black checked:hover:text-black focus:text-black focus:outline-none focus:ring-0 focus:ring-black checked:focus:text-black checked:active:text-black" name="clothes-type" id="" />
                <label className="text-xs" name="clothes-type">
                  Womenswear
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="SUBSCRIBE"
              className={`w-full h-[30px] border-black border-[0.8px] px-1.5 bg-white text-xs ${
                focusedInput ? "block" : "hidden"
              }`}
            />
          </form>
        </ul>
      </nav>

      <ul className="hidden lg:flex justify-between px-[100px] pt-4 min-w-[650px]">
        <li className="text-[10px] text-[#888]">© 2023 ssense.com</li>
        <li className="text-[10px] text-[#888]">Terms and conditions</li>
        <li className="text-[10px] text-[#888]">Privacy Policy</li>
        <li className="text-[10px] text-[#888]">Cookies</li>
        <li className="text-[10px] text-[#888]">Accessibility</li>

        <li className="flex w-[80px] justify-between">
          <a href="https://www.facebook.com/SSENSEofficial">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/ssense">
            <AiOutlineTwitter />
          </a>
          <a href="https://www.instagram.com/ssense/">
            <AiOutlineInstagram />
          </a>
          <a href="https://www.youtube.com/user/ssense">
            <AiFillYoutube />
          </a>
        </li>
      </ul>

      <div className="lg:hidden flex w-[120px] justify-between m-auto pt-5">
        <a href="https://www.facebook.com/SSENSEofficial">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com/ssense">
          <AiOutlineTwitter />
        </a>
        <a href="https://www.instagram.com/ssense/">
          <AiOutlineInstagram />
        </a>
        <a href="https://www.youtube.com/user/ssense">
          <AiFillYoutube />
        </a>
      </div>
      
      <div className="flex justify-center my-5">
        <span className="text-xs">COUNTRY/REGION: Canada</span>
      </div>
        <div className="lg:hidden mb-5 w-full sm:w-[300px] m-auto">
          <div className="flex justify-around">
            <Link className="text-[10px] text-center text-[#888] py-3 group transition duration-300" to={"https://www.ssense.com/en-ca/terms-conditions"}>
              Terms and conditions
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </Link>
            <Link className="text-[10px] text-center text-[#888] py-3 group transition duration-300" to={"https://www.ssense.com/en-ca/privacy-policy"}>
              Privacy Policy
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </Link>
            <Link className="text-[10px] text-center text-[#888] py-3 group transition duration-300">
              Cookies
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </Link>
          </div>
          <div className="flex justify-around">  
            <Link className="text-[10px] text-center text-[#888] py-3 group transition duration-300" to={"https://www.ssense.com/en-ca/customer-service/accessibility"}>
              Accessibility
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </Link>
            <Link className="text-[10px] text-center text-[#888] py-3 col-span-2">
              © {year} ssense.com
            </Link>
          </div>
        </div>
    </div>
  );
};

export default Footer;
