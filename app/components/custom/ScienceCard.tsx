export function ScienceCard(props: any) {
  return (
    <div
      key={props.key}
      className="flex flex-col min-w-[250px] w-[350px] cursor-pointer"
    >
      {/* Video or Image */}
      <div className="w-full h-[400px] overflow-hidden rounded-xl bg-black">
        <img src={props.src} className="w-full h-full object-cover" />
      </div>

      {/* Product Info */}
      <div className="mt-3 p-1 bg-white rounded-xl shadow-sm flex items-center justify-between">
        <div className="flex w-[85%]">
          <div className="w-[60px] h-[60px] bg-gray-300 rounded-[5px] p-[5px] mr-[10px] flex justify-center items-center">
            <img
              src="/images/omega-3.png"
              alt="Product"
              className="w-10 mb-1"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-[13px] font-medium">{props.title}</div>
            <div className="text-[13px] font-semibold">{props.price}</div>
          </div>
        </div>
        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-white text-lg">
          +
        </button>
      </div>
    </div>
  );
}
