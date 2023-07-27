import { useState } from "react";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  const [focusedInput, setFocusedInput] = useState(false);

  return (
    <div className="px-[42px]">
      <nav>
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
          <form className="w-[300px]">
            <input
              type="email"
              placeholder="Email address"
              className="block w-full h-[30px] border-[0.8px] px-1.5 border-black focus:outline-none text-xs"
              onFocus={() => setFocusedInput(true)}
            />
            <div
              className={`flex justify-between ${
                focusedInput ? "block" : "hidden"
              }`}
            >
              <div>
                <input type="radio" name="clothes-type" id="menswear" />
                <label id="menswear" className="text-xs" name="clothes-type">
                  MENSWEAR
                </label>
              </div>
              <div>
                <input type="radio" name="clothes-type" id="" />
                <label className="text-xs" name="clothes-type">
                  WOMENSWEAR
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

      <div className="lg:hidden flex w-[120px] justify-between m-auto pt-4">
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

      <div>
        <ul className="lg:hidden w-[300px] m-auto grid grid-cols-2">
          <li className="text-[10px] text-center text-[#888] py-3 group transition duration-300">
            Terms and conditions
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
          <li className="text-[10px] text-center text-[#888] py-3 group transition duration-300">
            Privacy Policy
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
          <li className="text-[10px] text-center text-[#888] py-3 group transition duration-300">
            Cookies
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
          <li className="text-[10px] text-center text-[#888] py-3 group transition duration-300">
            Accessibility
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
          <li className="text-[10px] text-center text-[#888] py-3 col-span-2">
            © 2023 ssense.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
