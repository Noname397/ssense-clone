import { Link, useNavigate } from "react-router-dom";
export const RightSideBar = (props) => {
  return (
    <div className="flex flex-col items-end">
      <div>
        <h2 className="font-bold uppercase text-xs my-[10px]">Sort</h2>
        <ul>
          <a href="#" onClick={() => props.updatePrice("descendingPrice")}>
            <h3 className="text-xs mb-[2px]">Price: High to Low</h3>
          </a>
          <a
            href="#"
            onClick={() =>
              //  props.function("ascendingPrice")
              props.updatePrice("ascendingPrice")
            }
          >
            <h3 className="text-xs mb-[2px]">Price: Low to High</h3>
          </a>
        </ul>
      </div>
      <div className="flex flex-col items-end">
        <h2 className="font-bold uppercase text-xs my-[10px]">
          <Link onClick={() => {
            props.returnAllProducts();
          }}>
          All Colors
          </Link>
        </h2>
        <select
          name=""
          id=""
          className="text-xs"
          onChange={(e) => {
            props.updateColor(e.target.value)
          }}
        >
          <option value="" disabled selected>
            Select
          </option>
          {props.colors.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
