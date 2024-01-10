import { CiCircleRemove } from "react-icons/ci";
import { UserCart } from "../../contexts/CartContext";
import { UserAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
export const CartDetails = () => {
  const { user } = UserAuth();
  const total = [1, 2, 3, 4, 5];
  const { cart, removeFromCart, totalCost } = UserCart();
  return (
    <div className="mt-[55px] w-full px-4 sm:px-9 text-xs min-h-[85vh]">
      {cart.length > 0 && (
        <div className="w-full grid grid-cols-1 md:grid-cols-10">
          <div className="col-span-1 mb-5 md:hidden">
            {!user && (
              <div className="flex flex-col">
                <label htmlFor="">Your email</label>
                <input className="border-black h-[30px] max-w-[200px] px-[6px] outline-none focus:border-black focus:ring-0 text-[11px]"></input>
              </div>
            )}
            {user && (
              <div className="w-full text-xs">
                <p className="uppercase mb-2.5">Logged in as</p>
                <p className="mb-5">{user.email}</p>
                <div className="w-full">
              <button className="w-full">
                <Link
                  to="/checkout"
                  className=" bg-black min-h-[35px] px-2 text-white uppercase flex items-center justify-center text-xs"
                >
                  proceed to checkout
                </Link>
              </button>
                </div>
              </div>
            )}
          </div>
          <div className="grid-cols-1 col-span-1 md:col-span-7 grid place-items-center">
            <div className="w-full md:w-4/5">
              <p className="uppercase mb-2.5" >Shopping cart</p>
              <div className="h-[25px] flex items-center justify-between border-b border-b-[#b6b6b6]">
                <div className="h-full flex">
                <div className="ml-[85px] flex items-center uppercase text-[#888]">
                    <span>Item</span>
                </div>
                </div>
                <div className="h-full">
                  <span className="uppercase text-[#888]">Total</span>
                </div>
              </div>
              <div>
                {cart.map((item, index) => {
                  return (
                    <div key={index} className="border-b border-b-[#b6b6b6] py-[15px]">
                      <div className="flex">
                        <div className="w-[75px]">
                          <img
                            src={item.product?.imgPreview}
                            className="w-full object-fill"
                            alt=""
                          />
                        </div>
                        <div className="relative w-full ml-5">
                          <div className="flex justify-between">
                            <p>{item.product?.brand}</p>
                            <p>{"$" + item.product?.price * item?.quantity}</p>
                          </div>
                          <p>{item.product?.name}</p>
                          <p>${item.product?.price}</p>
                          <p>Quantity: {item?.quantity}</p>
                          <button
                            className="flex items-center absolute bottom-0 right-0 hover:underline"
                            onClick={() => {
                              // console.log("haha");
                              removeFromCart(item);
                            }}
                          >
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="min-h-[100px] w-full mt-5">
                <div className="ml-[85px]">
                    <div className="flex justify-between">
                      <span>Total</span>
                      <span>{"$" + totalCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping estimate</span>
                      <span>Calculated at checkout</span>
                    </div>
                    <div className="flex justify-between mt-[5px] font-bold">
                      <span>Order Total</span>
                      <span>{"$" + totalCost}</span>
                    </div>
                </div>
                </div>
                
            </div>
          </div>
          <div className="hidden md:block md:col-span-3 mt-5 md:mt-0">
            {!user && (
              <div className="flex flex-col">
                <label htmlFor="">Your email</label>
                <input className="border-black h-[30px] max-w-[200px] px-[6px] outline-none focus:border-black focus:ring-0 text-[11px]"></input>
              </div>
            )}
            {user && (
              <div className="w-full text-xs">
                <p className="uppercase mb-2.5">Logged in as</p>
                <p className="mb-5">{user.email}</p>
                <div className="w-full">
              <button className="w-full">
                <Link
                  to="/checkout"
                  className=" bg-black min-h-[35px] px-2 text-white uppercase flex items-center justify-center text-xs"
                >
                  proceed to checkout
                </Link>
              </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {cart.length == 0 && (
        <div className="grid place-items-center">
        <div className="sm:w-4/5 w-full">
          <p className="uppercase mb-[35px]">Shopping cart</p>
          <p>Your shopping bag is empty</p>
          <div className="grid place-items-center mt-5">
            <Link
              to="/products"
              className="bg-black text-white h-[35px] min-w-[150px] w-[50%] flex items-center justify-center"
            >
              SHOP ALL PRODUCTS
            </Link>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};
