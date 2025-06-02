import {useState} from 'react';
import {useCart} from '@shopify/hydrogen-react';
import {AddToCartButton} from '../AddToCartButton';
import type {ProductFragment} from 'storefrontapi.generated';

export function RightDrawer(props: any) {
  const [quantity, setQuantity] = useState(1);
  const [plan, setPlan] = useState('subscribe');

  // console.log(props.selectedProduct);

  const {linesAdd, status} = useCart();

  const allVariants = props.selectedProduct?.variant;
  const variants = allVariants?.[0];
  // console.log(variants);
  const [selectedVariantId, setSelectedVariantId] = useState(variants);
  const merchandise = {merchandiseId: variants};
  return (
    <div className="relative">
      {/* Toggle Button */}

      {/* Overlay */}
      {props.open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-400"
          onClick={() => props.setOpen(false)}
        />
      )}

      {/* Drawer Panel */}

      <div
        className={`fixed top-0 right-0 h-full w-150 bg-white shadow-lg z-500 transform transition-transform duration-300 ${
          props.open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-2 flex justify-end">
          <button onClick={() => props.setOpen(false)} className="text-2xl">
            &times;
          </button>
        </div>
        <div className="pt-0 pr-10 pb-10 pl-10 mx-auto bg-white shadow-lg rounded-lg space-y-6">
          <img
            src={props.selectedProduct?.src}
            alt="Product"
            className="mx-auto w-50 mb-[0px]"
          />

          <div>
            <div className="text-[26px] font-bold">
              {props.selectedProduct?.name}
            </div>
            <p className="text-gray-500 text-sm">
              {props.selectedProduct?.description}
            </p>
          </div>

          <div className="flex text-xs justify-between mb-[10px]">
            <div>
              {props.selectedProduct?.tags.map((tag: string, id: number) => (
                <span
                  key={id}
                  className="px-[10px] py-[5px] bg-[#F6F6F5] rounded-[5px] text-[12px] ml-[10px]"
                >
                  {' '}
                  • {tag}
                </span>
              ))}
            </div>
            <div className="text-black-500 text-[16px]">★★★★★</div>
          </div>

          {/* Variant Selector */}

          <div className=" border-b border-b-[#d3d3d3] mb-[5px]">
            <div className="flex justify-between border-b border-[#d3d3d3] pb-5">
              <div className="w-[30%] text-left">Variant</div>
              <div className="w-[25%]">Quantity</div>
              <div className="w-[20%]">Price</div>
              <div className="w-[10%]">Discount</div>
              <div className="w-[15%] text-right">Total</div>
            </div>
            <div>
              {props.selectedProduct?.variant.map(
                (vari: string, id: number) => (
                  <div
                    key={id}
                    className="flex mt-[10px] items-center mb-[10px]"
                  >
                    <div className="w-[30%] flex">
                      <div className="p-2.5 border border-[#d3d3d3] rounded-[10px]">
                        <img
                          className="w-[40px]"
                          src={props.selectedProduct.src}
                        />
                      </div>
                      <div className="flex flex-col ml-[10px] justify-center">
                        <span className="font-medium text-[12px]">
                          {vari?.title}
                        </span>
                        <span className="text-[12px]">
                          {30 * (id + 1)} Capsules
                        </span>
                      </div>
                    </div>
                    <div className="w-[25%]">
                      <div className="w-[80%] flex items-center border border-[#d3d3d3] rounded h-[40px]">
                        <button
                          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                          className="px-3 py-1"
                        >
                          -
                        </button>
                        <span className="px-4">{quantity}</span>
                        <button
                          onClick={() => setQuantity((q) => q + 1)}
                          className="px-3 py-1"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <span className="w-[20%]">
                      ${props.selectedProduct?.price} / Each
                    </span>
                    <span className="w-[10%] text-center">5%</span>
                    <span className="w-[15%] text-right">100$</span>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="px-[10px] py-[5px] border  border-[#d3d3d3] rounded">
              View Cart
            </div>
            <div className="flex flex-col">
              <div className="text-center text-[12px]">20</div>
              <div className="text-[12px]">Total Items</div>
            </div>
            <div className="flex flex-col">
              <span className="text-right text-[14px] font-bold">$249.5</span>
              <span className="text-right text-[12px]">Product SubTotal</span>
              <span className="text-right text-[12px]">
                Taxes & shipping calculated at checkout
              </span>
            </div>
          </div>

          {/* Subscription Options */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            {['one-time', 'subscribe'].map((option) => (
              <label
                key={option}
                className={`p-3 border rounded ${plan === option ? 'border-black' : 'border-gray-200'}`}
              >
                <input
                  type="radio"
                  name="plan"
                  value={option}
                  checked={plan === option}
                  onChange={() => setPlan(option)}
                  className="hidden"
                />
                <div className="flex items-center">
                  {plan === option ? (
                    <div className="w-5 h-5 border-2 border-black rounded-full flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                    </div>
                  ) : (
                    <div className="w-5 h-5 border-2 border-black rounded-full flex items-center justify-center"></div>
                  )}
                  <div className="ml-[30px]">
                    <p className="text-sm font-semibold">
                      {option === 'one-time'
                        ? 'One-Time Purchase'
                        : 'Subscribe & Save'}
                    </p>
                    <p className="text-xs">
                      {option === 'subscribe' ? (
                        <span>
                          $39.96{' '}
                          <span className="text-[#802608]">Save 10%</span>
                        </span>
                      ) : (
                        '$49.95'
                      )}
                    </p>
                  </div>
                </div>
              </label>
            ))}
          </div>

          {/* Checkout */}
          <div className="flex justify-between items-center mt-6">
            <div className="bg-black text-white rounded font-bold flex p-1 w-[100%]">
              <div className="w-[150px]">
                <div className="flex justify-between items-center border border-[#d3d3d3] rounded h-[40px] bg-white text-black">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1"
                  >
                    -
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-1"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="flex items-center ml-[20%] cursor-pointer"
                onClick={() => {
                  props.setOpen(false);
                  props.setCartopen(true);
                }}
                // onClick={handleAddToCart}
              >
                Add to Cart - $500
              </button>
            </div>
          </div>

          <p className="text-center text-sm underline text-gray-500">
            View Full Details
          </p>
        </div>
      </div>
    </div>
  );
}
