export const LeftSideBar = (props) => {
  return (
    <div>
      <div>
        <h2 className="font-bold uppercase text-xs my-[10px] cursor-pointer" onClick={() => {
          props.returnAllProducts()
        }}>
          All categories
        </h2>
        <ul>
          <a
            href="#"
            onClick={() => {
              props.updateType("accessories");
            }}
          >
            <h3 className="text-xs uppercase mb-[2px]">Accessories</h3>
          </a>
          <a
            href="#"
            onClick={() => {
              props.updateType("bags");
            }}
          >
            <h3 className="text-xs uppercase mb-[2px]">Bags</h3>
          </a>
          <a
            href="#"
            onClick={() => {
              props.updateType("clothing");
            }}
          >
            <h3 className="text-xs uppercase mb-[2px]">Clothing</h3>
          </a>
          <a
            href="#"
            onClick={() => {
              props.updateType("shoes");
            }}
          >
            <h3 className="text-xs uppercase mb-[2px]">Shoes</h3>
          </a>
        </ul>
      </div>
      <div>
        <h2 className="font-bold uppercase text-xs my-[10px]">All designers</h2>
        <select
          name=""
          id=""
          className="text-xs"
          onChange={(e) => {
            props.updateDesigner(e.target.value)
          }}
          
        >
          <option value="" disabled selected>
            Select
          </option>
          {props.allDesigners.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
