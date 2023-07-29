import {CiCircleRemove}from 'react-icons/ci'
import { UserCart } from '../../contexts/CartContext';
export const CartDetails = () => {
  const total = [1,2,3,4,5];
  const {cart,removeFromCart,totalCost}= UserCart(); 
  return (
    <div className="mt-[55px] px-4 sm:px-9 text-xs">
      {cart.length > 0 && (
        <div className="grid grid-cols-10">
          <div className="col-span-7 grid place-items-center">
            <div className="min-w-[80%]">
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
                          <p>Quantity: {item?.quantity}
                            
                            </p>
                          <button className='flex items-center absolute bottom-0 right-0' 
                            onClick={() => {
                                // console.log("haha");
                               removeFromCart(item)
                            }
                            }
                            >
                            <CiCircleRemove>
                            </CiCircleRemove>
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <p className='flex justify-between font-bold'>
                  <p>

                  Total price:
                  </p>
                  <span>${totalCost}</span>
                  </p>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <p>Logged in as sb</p>
          </div>
        </div>
      )}
      {cart.length == 0 && (
        <div>
            Your shopping bag is empty
         </div>   
      )}
    </div>
  );
};
