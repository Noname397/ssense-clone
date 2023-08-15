import { CiCircleRemove } from "react-icons/ci";
import { UserCart } from "../../contexts/CartContext";
import { UserAuth } from "../../contexts/AuthContext";
export const CartDetails = () => {
  const { user } = UserAuth();
  const total = [1, 2, 3, 4, 5];
  const { cart, removeFromCart, totalCost } = UserCart();
  return (
    <div className="mt-[55px] px-4 sm:px-9 text-xs min-h-[85vh]">
      {cart.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-10 gap-x-10">
          <div className="grid-cols-1 md:col-span-7 grid place-items-center">
            <div className="w-full">
              <p>Shopping cart</p>
              <div>
                {cart.map((item, index) => {
                  return (
                    <div key={index} className="border-y py-[15px]">
                      <div className="h-[120px] flex">
                        <div className="h-full">
                          <img
                            src={item.product?.imgPreview}
                            className="h-full"
                            alt=""
                          />
                        </div>
                        <div className="relative w-full ml-5">
                          <p>{item.product?.brand}</p>
                          <p>{item.product?.name}</p>
                          <p>${item.product?.price}</p>
                          <p>Quantity: {item?.quantity}</p>
                          <button
                            className="flex items-center absolute bottom-0 right-0"
                            onClick={() => {
                              // console.log("haha");
                              removeFromCart(item);
                            }}
                          >
                            <CiCircleRemove></CiCircleRemove>
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <p className="flex justify-between font-bold">
                  <p>Total price:</p>
                  <span>${totalCost}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 mt-5 md:mt-0">
            {!user && (
              <div className="flex flex-col">
                <label htmlFor="">Your email</label>
                <input className="border-black h-[30px] max-w-[200px] px-[6px] outline-none focus:border-black focus:ring-0 text-[11px]"></input>
              </div>
            )}
            {user && (
              <div>
                <p className="uppercase mb-2.5">Logged in as</p>
                <p className="mb-5">{user.email}</p>
                
                <button className="bg-black min-h-[35px] text-white w-full uppercase">proceed to checkout</button>
              </div>

            )}
          </div>
        </div>
      )}
      {cart.length == 0 && <div>Your shopping bag is empty</div>}
    </div>
  );
};
