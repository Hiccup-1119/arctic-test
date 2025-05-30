import {useState} from 'react';
import {RightDrawer} from '../drawer/ProductDetail';
import {CartDetail} from '../drawer/CartDetail';
import {SupplementCard} from '../custom/SupplementCard';

export function SupplementsSection() {
  const [plan, setPlan] = useState('subscribe');
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

  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      {/* Section Heading */}
      <RightDrawer
        open={open}
        setOpen={setOpen}
        cartopen={cartOpen}
        setCartopen={setCartOpen}
      />
      <CartDetail open={cartOpen} setOpen={setCartOpen} />
      <div className="text-center mb-10 flex justify-center items-center">
        <div className="w-[50px] h-[50px] border border-gray-300 rounded-[10px] flex justify-center items-center">
          <img src="/images/arrow.png" className="-rotate-135" />
        </div>
        <div className="w-[400px]">
          <p className="">🌟 Trending</p>
          <div className="text-[40px] font-bold">Supplements</div>
          <a href="/collections/supplements" className="">
            View All
          </a>
        </div>
        <div className="w-[50px] h-[50px] border border-gray-300 rounded-[10px] flex justify-center items-center">
          <img src="/images/arrow.png" className="rotate-45" />
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
            tag={product.tags}
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
