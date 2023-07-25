import { Link } from "react-router-dom"
export const ProductCard = (product) => {
    return (
        <Link to={"/product/" + product.brand.replace(/\s+/g, '-').toLowerCase() + "/" + product.name.replace(/\s+/g, '-').toLowerCase()} 
            state={product}
        className="col-span-1">
            <div>
                <img src={product.imgPreview} alt="" />
            </div>
            <div className="text-xs uppercase">
                {product.brand}
            </div>
            <div className="text-xs">
                {product.name}
            </div>
            <div className="text-xs">
                {'$'+product.price}
            </div>
        </Link>
    )
}