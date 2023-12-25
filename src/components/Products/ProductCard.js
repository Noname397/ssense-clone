import { Link } from "react-router-dom";
export const ProductCard = (product) => {
  return (
    <div className="col-span-1">
      <div className="mb-2.5">
        <img src={product.imgPreview} className="h-full w-full object-cover" alt="" />
      </div>
      <div className="pr-2">
      <div className="text-xs uppercase">{product.brand}</div>
      <div className="text-xs">{product.name}</div>
      <div className="text-xs">{"$" + product.price}</div>
      </div>
    </div>
  );
};
