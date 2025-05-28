import {useState} from 'react';
import {CartCard} from '../custom/CartCard';

export function CartDetail(props: any) {
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
        <div className="p-5 flex justify-between border-b border-b-[#d3d3d3]">
          <div className="flex items-center">
            <span className="text-[34px] font-bold">Your Bag</span>
            <div className="text-[18px] bg-black text-white w-[36px] h-[36px] flex items-center justify-center rounded-full ml-[10px]">
              2
            </div>
          </div>
          <button onClick={() => props.setOpen(false)} className="text-[30px]">
            &times;
          </button>
        </div>
        <div className="px-5 pt-5">
          <div className="text-center text-[16px]">
            You are <strong>$45.44 away</strong> from eligible for free shipping
          </div>
          <div className="flex items-center justify-between">
            <span>$0</span>
            <div className="w-[85%] flex">
              <div className="h-[3px] w-[60%] bg-black"></div>
              <div className="h-[3px] w-[40%] bg-[#F6F6F5]"></div>
            </div>
            <span>$85</span>
          </div>
          <div className=" bg-[#F6F6F5] p-[10px] rounded-[10px] mt-5">
            <div className="flex items-center justify-between bg-white rounded-[10px] p-[16px] mb-3">
              <img className="h-[90px] w-[90px]" src="/images/magtein.png" />
              <div className="w-[80%]">
                <div className="flex justify-between">
                  <span className="text-[14px]">Magnesium L-Threonate</span>
                  <span className="text-[14px]">$49.95</span>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <div className="w-[140px]">
                    <div className="flex justify-between items-center border border-[#d3d3d3] rounded h-[40px] bg-white text-black">
                      <button className="px-3 py-1">-</button>
                      <span className="px-4">1</span>
                      <button className="px-3 py-1">+</button>
                    </div>
                  </div>
                  <div className="p-4 rounded-[5px] h-[40px] flex justify-center items-center  border border-dotted border-[#d3d3d3]">
                    Subscribe & Save 10%
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between bg-white rounded-[10px] p-[16px]">
              <img className="h-[90px] w-[90px]" src="/images/magtein.png" />
              <div className="w-[80%]">
                <div className="flex justify-between">
                  <span className="text-[14px]">Magnesium L-Threonate</span>
                  <span className="text-[14px]">$49.95</span>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <div className="w-[140px]">
                    <div className="flex justify-between items-center border border-[#d3d3d3] rounded h-[40px] bg-white text-black">
                      <button className="px-3 py-1">-</button>
                      <span className="px-4">1</span>
                      <button className="px-3 py-1">+</button>
                    </div>
                  </div>
                  <div className="p-4 rounded-[5px] h-[40px] flex justify-center items-center  border border-dotted border-[#d3d3d3]">
                    Subscribe & Save 10%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div className="text-[22px]">Enhance Your Performance</div>
            <div className="flex">
              <div className="w-[50px] h-[50px] border border-gray-300 rounded-[10px] flex justify-center items-center bg-[#F5F5F5]">
                <img src="/images/arrow.png" className="-rotate-135" />
              </div>
              <div className="w-[50px] h-[50px] border border-gray-300 rounded-[10px] flex justify-center items-center bg-[#F5F5F5] ml-2">
                <img src="/images/arrow.png" className="rotate-45" />
              </div>
            </div>
          </div>
          <div className="mb-5 flex">
            <CartCard />
            <CartCard />
          </div>
        </div>
        <div className="border-t-[px] border-t-[#F5F5F5] px-5">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-[20px] font-bold">Subtotal</span>
              <span className="text-[#1B1F2399] text-[14px]">
                Tax included. Shipping calculated at checkout.
              </span>
            </div>
            <div className="text-[24px] font-bold">$99.99</div>
          </div>
          <div className="w-full px-[10px] py-[16px] bg-black text-white text-[18px] font-bold text-center rounded-[10px] mt-3 cursor-pointer">
            Checkout
          </div>
        </div>
      </div>
    </div>
  );
}
