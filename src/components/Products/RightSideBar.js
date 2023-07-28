export const RightSideBar = () => {
  return (
    <div className="flex flex-col items-end">
      <div>
        <h2 className="font-bold uppercase text-xs my-[10px]">Sort</h2>
        <ul>
          <li>
            <h3 className="text-xs mb-[2px]">Price: Low to High</h3>
          </li>
          <li>
            <h3 className="text-xs mb-[2px]">Price: Low to High</h3>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-end">
        <h2 className="font-bold uppercase text-xs my-[10px]">Colors</h2>
        <input type="text" className="w-[70%] border outline-none text-xs" />
      </div>
    </div>
  );
};
