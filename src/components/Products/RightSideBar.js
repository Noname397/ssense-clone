import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCaretDown,FaCaretUp } from "react-icons/fa";
export const RightSideBar = (props) => {
  const [statusColors,setStatusColors] = useState(false)
  return (
    <div className="flex flex-col  ml-5">
      <div>
        <div className="flex">
        <h2 className="font-bold uppercase text-xs my-[10px]">Sort</h2>
        </div>
        <ul>
          <Link onClick={() => props.updatePrice("descendingPrice")}>
            <h3 className={`text-xs mb-[2px] ${
              props.priceCommend === "descendingPrice" ? "underline" : ""}`}>Price: High to Low</h3>
          </Link>
          <Link
            onClick={() =>
              props.updatePrice("ascendingPrice")
            }
          >
            <h3 className={`text-xs mb-[2px] ${
              props.priceCommend === "ascendingPrice" ? "underline" : ""
            }`}>Price: Low to High</h3>
          </Link>
        </ul>
      </div>
      <div >
        <div className="flex items-center justify-between">
          <Link className="font-bold uppercase text-xs my-[10px]" >
          All Colors
          </Link>
        {statusColors && <FaCaretDown onClick={() => setStatusColors(false)} />}
        {!statusColors && <FaCaretUp onClick={() => setStatusColors(true)} />}
        
        </div>
        {statusColors && <ul>
          {Array.isArray(props.allColors) && // Ensure props.allColors is an array
            props.allColors.map((item, index) => (
              <div key={index}>
                <li className={`mb-0.5 ${
                  props.color === item ? "underline" : ""
                }`} onClick={() => {
                  props.updateColor(item)
                }}>
                  <Link>{item}</Link>
                </li>
              </div>
            ))}
        </ul>}
      </div>
    </div>
  );
};
