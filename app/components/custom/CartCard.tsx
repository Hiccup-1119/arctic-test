export function CartCard() {
  return (
    <div className="p-[20px] text-[14px] w-[220px] bg-[#F5F5F5] flex flex-col items-center rounded-[10px] mr-5 cursor-pointer">
      <img className="w-[140px] h-[140px]" src="/images/bundle.png" />
      <div className="font-bold">Tongkat & Fadogia 60 Day Supply</div>
      <div className="flex justify-between items-center w-full">
        <span>$49.95</span>
        <div className="text-white bg-black rounded-[5px] px-3 py-1">
          Add to Cart +
        </div>
      </div>
    </div>
  );
}
