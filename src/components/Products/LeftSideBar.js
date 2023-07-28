export const LeftSideBar = () => {
  return (
    <div>
      <div>
        <h2 className="font-bold uppercase text-xs my-[10px]">
          All categories
        </h2>
        <ul>
          <li>
            <h3 className="text-xs uppercase mb-[2px]">Accessories</h3>
          </li>
          <li>
            <h3 className="text-xs uppercase mb-[2px]">Bags</h3>
          </li>
          <li>
            <h3 className="text-xs uppercase mb-[2px]">Clothing</h3>
          </li>
          <li>
            <h3 className="text-xs uppercase mb-[2px]">Shoes</h3>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold uppercase text-xs my-[10px]">All designers</h2>
        <input type="text" className="w-[90%] border outline-none text-xs"/>
      </div>
    </div>
  );
};
