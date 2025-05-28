import {useState} from 'react';

export function RightDrawer(props: any) {
  const [variant, setVariant] = useState<'small' | 'medium' | 'large'>(
    'medium',
  );
  const [quantity, setQuantity] = useState(1);
  const [plan, setPlan] = useState('subscribe');

  const variants = {
    small: {label: 'Small', count: '30 Capsules', price: 49.95},
    medium: {label: 'Medium', count: '60 Capsules', price: 49.95},
    large: {label: 'Large', count: '90 Capsules', price: 49.95},
  };

  const total = variants[variant].price * quantity;
  const discount = plan === 'subscribe' ? 0.2 : 0;
  const finalPrice = total * (1 - discount);
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
            src="/images/magtein.png"
            alt="Product"
            className="mx-auto w-50 mb-[0px]"
          />

          <div>
            <div className="text-[26px] font-bold">Magnesium L-Threonate</div>
            <p className="text-gray-500 text-sm">
              Enhances the quality of sleep.
            </p>
          </div>

          <div className="flex text-xs justify-between mb-[10px]">
            <div>
              <span className="px-[10px] py-[5px] bg-[#F6F6F5] rounded-[5px] text-[12px] ml-[10px]">
                {' '}
                • GMO Free
              </span>
              <span className="px-[10px] py-[5px] bg-[#F6F6F5] rounded-[5px] text-[12px]">
                {' '}
                • Gluten Free
              </span>
            </div>
            <div className="text-black-500 text-[16px]">★★★★★</div>
          </div>

          {/* Variant Selector */}

          <div className=" border-b border-b-[#d3d3d3] mb-[5px]">
            <div className="flex justify-between border-b border-[#d3d3d3] pb-5">
              <div className="w-[30%] text-left">Variant</div>
              <div className="w-[17.5%]">Quantity</div>
              <div className="w-[17.5%]">Price</div>
              <div className="w-[17.5%]">Discount</div>
              <div className="w-[17.5%] text-right">Total</div>
            </div>
            <div>
              {(
                Object.entries(variants) as Array<
                  [
                    keyof typeof variants,
                    (typeof variants)[keyof typeof variants],
                  ]
                >
              ).map(([key, v]) => (
                <div
                  key={key}
                  className="flex mt-[10px] items-center mb-[10px]"
                >
                  <div className="w-[30%] flex">
                    <div className="p-2.5 border border-[#d3d3d3] rounded-[10px]">
                      <img className="w-[40px]" src="/images/magtein.png" />
                    </div>
                    <div className="flex flex-col ml-[10px] justify-center">
                      <span className="font-medium text-[12px]">{v.label}</span>
                      <span className="text-[12px]">{v.count}</span>
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
                  <span className="w-[20%]">${v.price.toFixed(2)} / Each</span>
                  <span className="w-[10%] text-center">5%</span>
                  <span className="w-[15%] text-right">100$</span>
                </div>
              ))}
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
              <div
                className="flex items-center ml-[20%] cursor-pointer"
                onClick={() => {
                  props.setOpen(false);
                  props.setCartopen(true);
                }}
              >
                Add to Cart - ${finalPrice.toFixed(2)}
              </div>
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
