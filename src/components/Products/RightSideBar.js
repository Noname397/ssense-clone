export const RightSideBar = (props) => {
  return (
    <div className="flex flex-col items-end">
      <div>
        <h2 className="font-bold uppercase text-xs my-[10px]">Sort</h2>
        <ul>
          <a href="#" 
          onClick={() => props.function("descendingPrice")}
          >
            <h3 className="text-xs mb-[2px]">Price: High to Low</h3>
          </a>
          <a href="#"
           onClick={() => props.function("ascendingPrice")}
           >
            <h3 className="text-xs mb-[2px]">Price: Low to High</h3>
          </a>
        </ul>
      </div>
      <div className="flex flex-col items-end">
        <h2 className="font-bold uppercase text-xs my-[10px]">Colors</h2>
        <input type="text" className="w-[70%] border-black focus:border-black focus:ring-0 text-xs" />
      </div>
    </div>
  );
};
