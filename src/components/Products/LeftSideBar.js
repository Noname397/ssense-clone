export const LeftSideBar = (props) => {
  console.log(props.designers)
  return (
    <div>
      <div>
        <h2 className="font-bold uppercase text-xs my-[10px]">
          All categories
        </h2>
        <ul>
          <a
            href="#"
            onClick={() => {
              props.function("accessories");
            }}
          >
            <h3 className="text-xs uppercase mb-[2px]">Accessories</h3>
          </a>
          <a
            href="#"
            onClick={() => {
              props.function("bags");
            }}
          >
            <h3 className="text-xs uppercase mb-[2px]">Bags</h3>
          </a>
          <a
            href="#"
            onClick={() => {
              props.function("clothing");
            }}
          >
            <h3 className="text-xs uppercase mb-[2px]">Clothing</h3>
          </a>
          <a
            href="#"
            onClick={() => {
              props.function("shoes");
            }}
          >
            <h3 className="text-xs uppercase mb-[2px]">Shoes</h3>
          </a>
        </ul>
      </div>
      <div>
        <h2 className="font-bold uppercase text-xs my-[10px]">All designers</h2>
        <select name="" id="" className="text-xs">
          {props?.designers?.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
