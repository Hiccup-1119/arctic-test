import {useState, Suspense} from 'react';
import {SupplementCard} from '../custom/SupplementCard';
import {RightDrawer} from '../drawer/ProductDetail';
import {CartDetail} from '../drawer/CartDetail';
import {StoreCollectionsQuery} from 'storefrontapi.generated';
import {Await} from 'react-router';

export function SpecificSection({
  collection,
}: {
  collection: Promise<StoreCollectionsQuery | null>;
}) {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [plan, setPlan] = useState('subscribe');
  const [selectedProduct, setSelectedProduct] = useState();

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 bg-white">
      <RightDrawer
        open={open}
        setOpen={setOpen}
        cartopen={cartOpen}
        setCartopen={setCartOpen}
        selectedProduct={selectedProduct}
      />
      <CartDetail open={cartOpen} setOpen={setCartOpen} />
      {/* Section Heading */}

      {/* Product Grid */}
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={collection}>
          {(response) => {
            const collect = response?.collections?.nodes || [];
            const firstCollection = collect[0];
            return (
              <div>
                <div className="flex flex-wrap items-center justify-between p-[30px] w-full">
                  {/* Left: Title and Tabs */}
                  <div>
                    <p className="text-sm">📦 Goals Specific</p>
                    <div className="text-[40px] font-bold">Bundles</div>
                  </div>
                  <div>
                    <div className="flex gap-6 mt-4 text-sm font-medium">
                      {response
                        ? response?.collections.nodes.map((collect, id) => (
                            <button
                              key={id}
                              className={`pb-1 ${
                                id === 0
                                  ? 'border-b-2 border-black'
                                  : 'text-gray-500 hover:text-black'
                              }`}
                            >
                              {collect.title}
                            </button>
                          ))
                        : // <ProductItem key={product.id} product={product} />

                          null}
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-[30px]">
                  {firstCollection.products.nodes.map((product) => (
                    <SupplementCard
                      key={product.id}
                      src={product.featuredImage?.url}
                      alt={product.id}
                      setOpen={setOpen}
                      tags={product.tags}
                      name={product.title}
                      description={product.description}
                      price={product.priceRange.minVariantPrice.amount}
                      setPlan={setPlan}
                      plan={plan}
                      variant={product.variants.nodes}
                      setSelectedProduct={setSelectedProduct}
                    />
                  ))}
                </div>
              </div>
            );
          }}
        </Await>
      </Suspense>
    </section>
  );
}
