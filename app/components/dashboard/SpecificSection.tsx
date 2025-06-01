import {useState} from 'react';
import {SupplementCard} from '../custom/SupplementCard';
import {RightDrawer} from '../drawer/ProductDetail';
import {CartDetail} from '../drawer/CartDetail';

export function SpecificSection() {
  const products = [
    {
      id: 1,
      name: 'Omega - 3',
      description: 'Cognitive Health & Foundational Health',
      image: '/images/omega-3.png',
      subscriptionPrice: '$39.96',
      label: 'Bestseller',
      price: '$49.95',
      tags: ['GMO Free', 'Gluten Free'],
      rating: 5,
    },
    {
      id: 2,
      name: 'Magtein®',
      description: 'Enhances the quality of sleep.',
      image: '/images/magtein.png',
      price: '$49.95',
      tags: ['GMO Free', 'Gluten Free'],
      rating: 5,
    },
    {
      id: 3,
      name: 'Grass Fed Whey Protein Isolate Powder',
      description: 'Supports muscle mass and strength',
      image: '/images/protein.png',
      price: '$49.95',
      tags: ['GMO Free', 'Vegan', 'Dairy Free'],
      rating: 5,
    },
    {
      id: 4,
      name: 'Complete Sleep Bundle',
      description: 'Deepens sleep cycles for rejuvenated mornings',
      image: '/images/bundle.png',
      price: '$49.95',
      label: 'Bestseller',
      tags: ['Gluten Free', 'Vegan', 'Dairy Free'],
      rating: 5,
    },
  ];

  const categories = [
    'Sleep',
    'Cognitive Function',
    'Foundational Health',
    'Athletic Performance',
    'Hormone Support',
  ];

  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [plan, setPlan] = useState('subscribe');

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 bg-white">
      <RightDrawer
        open={open}
        setOpen={setOpen}
        cartopen={cartOpen}
        setCartopen={setCartOpen}
      />
      <CartDetail open={cartOpen} setOpen={setCartOpen} />
      {/* Section Heading */}
      <div className="flex flex-wrap items-center justify-between p-[30px] w-full">
        {/* Left: Title and Tabs */}
        <div>
          <p className="text-sm">📦 Goals Specific</p>
          <div className="text-[40px] font-bold">Bundles</div>
        </div>
        <div>
          <div className="flex gap-6 mt-4 text-sm font-medium">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`pb-1 ${
                  i === 0
                    ? 'border-b-2 border-black'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Right: View All + Arrows */}
        <div className="flex items-center gap-4 mt-6 md:mt-0">
          <a href="#" className="text-sm font-semibold underline">
            View All Bundles
          </a>

          <div className="w-[50px] h-[50px] border border-gray-300 rounded-[10px] flex justify-center items-center">
            <img src="/images/arrow.png" className="-rotate-135" />
          </div>
          <div className="w-[50px] h-[50px] border border-gray-300 rounded-[10px] flex justify-center items-center">
            <img src="/images/arrow.png" className="rotate-45" />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-[30px]">
        {products.map((product, id) => (
          <SupplementCard
            key={id}
            label={product.label}
            src={product.image}
            alt={product.name}
            setOpen={setOpen}
            tags={product.tags}
            name={product.name}
            description={product.description}
            price={product.price}
            setPlan={setPlan}
            plan={plan}
          />
        ))}
      </div>
    </section>
  );
}
