export function SupplementCard(props: any) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col group overflow-hidden h-[470px] cursor-pointer">
      {/* Label */}

      <span className="absolute text-xs font-semibold bg-yellow-300 text-gray-800 px-2 py-1 rounded mb-2 w-fit">
        Best Seller
      </span>

      {/* Image */}
      <img
        src={props.src}
        alt={props.alt}
        className="w-full h-64 object-contain mb-4 group-hover:scale-110  transition-all duration-500 "
      />
      {/* Tags */}
      <div className="z-10 p-4 flex flex-col justify-end transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-[-10%]">
        {props.tags && (
          <div className="flex flex-wrap gap-2 mb-2">
            {props.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-[10px] py-[5px] bg-[#F6F6F5] rounded-[10px] text-[10px]"
              >
                • {tag}
              </span>
            ))}
          </div>
        )}
        {/* Name & Desc */}
        <h3 className="text-md font-semibold">{props.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{props.description}</p>

        {/* Rating */}
        <div className="flex justify-between items-center mt-[20px]">
          <div className="text-black-500 text-sm mb-2">★★★★★</div>

          {/* Pricing / Actions */}
          <button className="bg-black text-white text-sm font-medium py-2 rounded mt-auto px-[10px]">
            Add • {props.price}
          </button>
        </div>
      </div>

      <div className="-mt-[180px] z-20 p-4 opacity-1 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
        <div className="grid grid-cols-2 gap-2 mt-4">
          {['one-time', 'subscribe'].map((option) => (
            <label
              key={option}
              className={`p-3 border rounded ${props.plan === option ? 'border-black' : 'border-gray-200'}`}
            >
              <input
                type="radio"
                name="plan"
                value={option}
                checked={props.plan === option}
                onChange={() => props.setPlan(option)}
                className="hidden"
              />
              <div className="flex items-center">
                {props.plan === option ? (
                  <div className="w-5 h-5 border-2 border-black rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                  </div>
                ) : (
                  <div className="w-5 h-5 border-2 border-black rounded-full flex items-center justify-center"></div>
                )}
                <div className="ml-[5px]">
                  <div className="text-[12px] font-semibold">
                    {option === 'one-time'
                      ? 'One-Time Purchase'
                      : 'Subscribe & Save'}
                  </div>
                  <p className="text-xs">
                    {option === 'subscribe' ? (
                      <span>
                        $39.96 <span className="text-[#802608]">Save 10%</span>
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
        <button
          className="w-full mt-4 py-2 bg-black text-white rounded-lg font-semibold text-sm"
          onClick={() => props.setOpen(true)}
        >
          Add to Cart - $49.95
        </button>
      </div>
      <button className="mt-0 text-xs text-gray-600 underline opacity-0 group-hover:opacity-100  transition-all duration-500">
        View Full Details
      </button>
    </div>
  );
}
