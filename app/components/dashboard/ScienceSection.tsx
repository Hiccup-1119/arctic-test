import {ScienceCard} from '../custom/ScienceCard';

export function ScienceSection() {
  const products = [
    {
      id: 1,
      video: '/images/man1.png',
      title: 'Magnesium L-Threonate',
      price: '$49.95',
    },
    {
      id: 1,
      video: '/images/man2.png',
      title: 'Magnesium L-Threonate',
      price: '$49.95',
    },
    {
      id: 1,
      video: '/images/man3.png',
      title: 'Magnesium L-Threonate',
      price: '$49.95',
    },
    {
      id: 1,
      video: '/images/man4.png',
      title: 'Magnesium L-Threonate',
      price: '$49.95',
    },
    {
      id: 1,
      video: '/images/man5.png',
      title: 'Magnesium L-Threonate',
      price: '$49.95',
    },
    // Add more objects with video/image paths as needed
  ];

  return (
    <div className="px-6 py-12 bg-gray-50">
      <div className="text-center mb-10 flex justify-center items-center">
        <div className="w-[50px] h-[50px] border border-gray-300 rounded-[10px] flex justify-center items-center">
          <img src="/images/arrow.png" className="-rotate-135" />
        </div>
        <div className="px-[100px]">
          <p className="">Trusted & Proven by Science</p>
          <div className="text-[40px] font-bold">
            Real People. Real Results.
          </div>
          <a href="/collections/supplements" className="">
            View All
          </a>
        </div>
        <div className="w-[50px] h-[50px] border border-gray-300 rounded-[10px] flex justify-center items-center">
          <img src="/images/arrow.png" className="rotate-45" />
        </div>
      </div>
      <div className="flex space-x-4 overflow-x-auto pb-4 justify-center">
        {products.map((product, id) => (
          <ScienceCard
            key={id}
            src={product.video}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
