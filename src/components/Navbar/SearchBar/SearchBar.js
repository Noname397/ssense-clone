import {
    AiOutlineMenu,
    AiOutlineSearch,
    AiOutlineShopping,
    AiOutlineUser,
  } from "react-icons/ai";
const SearchBar = (props) => {
  return (
    <div className="w-full px-9 py-3 bg-white">
      <div className="flex justify-between top-0 left-0 w-[300px]">
        <a href="" className="text-xs">MENSWEAR</a>
        <a href="" className="text-xs">WOMENSWEAR</a>
        <a href="" className="text-xs">EVERYTHING ELSE</a>
      </div>
      <div className="pt-2 flex">
        <div className="border border-black flex items-center px-2 h-[41px] w-full">
            <input type="text"  className="focus:outline-none h-full w-full" placeholder="Search" />
            <AiOutlineSearch className="h-full"> </AiOutlineSearch>
        </div>
        <button className="text-sm px-1" onClick={props.handler}>CLOSE</button>
      </div>
      <div className="py-2 flex items-center">
        <input type="checkbox" name="sales" id="sales" />
        <label className="text-xs" htmlFor="sales">SALES ONLY</label>
      </div>
    </div>
  );
};

export default SearchBar;
