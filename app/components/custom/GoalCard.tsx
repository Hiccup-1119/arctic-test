export function GoalCard(props: any) {
  return (
    <div
      key={props.key}
      className="bg-white overflow-hidden rounded-lg cursor-pointer group border-0 cursor-pointer"
    >
      <div className="overflow-hidden w-full h-64">
        <img
          src={props.src}
          alt={props.alt}
          className="w-full h-64 object-cover group-hover:scale-110  transition-transform duration-300"
        />
      </div>
      <div className="flex mt-[10px] justify-between">
        <div className="w-[80%]">
          <h2 className="text-left">{props.title}</h2>
          <p className="text-sm text-gray-600 text-left">{props.description}</p>
        </div>
        <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full border border-black">
          <img
            className="group-hover:rotate-45 transition-transform duration-300"
            src="/images/arrow.png"
          />
        </div>
      </div>
    </div>
  );
}
