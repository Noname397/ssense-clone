import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="px-[42px]">
      <nav>
        <ul className="hidden lg:flex lg:justify-between">
          <li className="text-xs group transition duration-300">
            <a href="">COUNTRY/REGION: VIETNAM</a>
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
          <li className="text-xs group transition duration-300">
            <a href="">NEWSLETTER SIGNUP</a>
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
          <li className="text-xs group transition duration-300">
            <a href="">CUSTOMER CARE</a>
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
          <li className="text-xs group transition duration-300">
            <a href="">LOCATION</a>
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
          <li className="text-xs group transition duration-300">
            <a href="">EDITORIAL ARCHIVE</a>
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
          <li className="text-xs group transition duration-300">
            <a href="">CAREERS</a>
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
          <li className="text-xs group transition duration-300">
            <a href="">AFFILIATES</a>
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
          <li className="text-xs group transition duration-300">
            <a href="">SITEMAPS</a>
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
          </li>
        </ul>
        <ul className="flex flex-col items-center">
          <h4 className="pb-2.5 text-xs">NEWSLETTER SIGNUP</h4>
          <p className="pb-5 text-xs">
            Sign up for email updates and promotions
          </p>
          <form className="w-[300px]">
            <input
              type="email"
              placeholder="Email address"
              className="block w-full h-[30px] border-[0.8px] px-1.5 border-black focus:outline-none text-xs"
            />
            <div className="flex justify-between">
              <div>
                <input type="radio" name="" id="menswear" />
                <label id="menswear"> MENSWEAR</label>
              </div>
              <div>
                <input type="radio" name="" id="" />
                <label> WOMENSWEAR</label>
              </div>
            </div>
            <input type="submit" value="Subscribe" className="w-full border-[0.8px] bg-white h-[30px]"/>
          </form>
        </ul>
      </nav>

      <ul className="flex justify-between px-[80px] pt-4">
        <li className="text-[10px] text-[#888]">© 2023 ssense.com</li>
        <li className="text-[10px] text-[#888]">Terms and conditions</li>
        <li className="text-[10px] text-[#888]">Privacy Policy</li>
        <li className="text-[10px] text-[#888]">Cookies</li>
        <li className="text-[10px] text-[#888]">Accessibility</li>

        <li className="flex">
          <FaFacebookF> </FaFacebookF>
          <AiOutlineTwitter />
          <AiOutlineInstagram />
          <AiFillYoutube />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
