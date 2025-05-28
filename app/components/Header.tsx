import {Suspense, useState} from 'react';
import {Await, NavLink, useAsyncValue} from 'react-router';
import {
  type CartViewPayload,
  useAnalytics,
  useOptimisticCart,
} from '@shopify/hydrogen';
import type {HeaderQuery, CartApiQueryFragment} from 'storefrontapi.generated';
import {useAside} from '~/components/Aside';

interface HeaderProps {
  header: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
}

type Viewport = 'desktop' | 'mobile';

export function Header({
  header,
  isLoggedIn,
  cart,
  publicStoreDomain,
}: HeaderProps) {
  const {shop, menu} = header;
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const menuItems = ['Shop', 'Science', 'Podcasts', 'Trainers', 'Blog'];
  return (
    <div className="fixed z-100 w-full p-5">
      <div className="bg-white flex justify-between px-[30px] py-[10px] h-[75px] rounded-[10px]">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center cursor-pointer">
          UNCMFRT.COM
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <img
            src="/images/header/search.png"
            aria-label="Search"
            className="text-xl"
          />
          {menuItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-gray-800 hover:text-black transition"
            >
              {item}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center hover:bg-gray-200 flex w-[100px] justify-around h-full bg-[#E4E4E4] rounded-[10px] text-black cursor-pointer">
            <div className="flex items-center">Men</div>
            <div className="flex items-center bg-white h-[35px] w-[35px] flex justify-center rounded-full">
              <img src="/images/header/man.png" />
            </div>
          </div>
          <div className="hover:bg-gray-800 bg-black h-full text-white rounded-[10px] px-[20px] flex items-center font-bold cursor-pointer">
            Take The Quiz
          </div>
          <div className="text-xl w-[30px] flex justify-center cursor-pointer">
            <img src="/images/header/user.png" />
          </div>
          <div className="text-xl w-[30px] flex justify-center cursor-pointer">
            <img src="/images/header/cart.png" />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label="Menu"
        >
          {isMobileOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-sm">
          {menuItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-gray-800 hover:underline"
            >
              {item}
            </NavLink>
          ))}
          <div className="flex gap-2 mt-2">
            <button className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-1">
              Men <span>🧍</span>
            </button>
            <NavLink
              to="/quiz"
              className="px-4 py-2 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800"
            >
              Take The Quiz
            </NavLink>
          </div>
          <div className="flex gap-4 text-xl mt-2">
            <NavLink to="/account">👤</NavLink>
            <NavLink to="/cart">🛒</NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}: {
  menu: HeaderProps['header']['menu'];
  primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
  viewport: Viewport;
  publicStoreDomain: HeaderProps['publicStoreDomain'];
}) {
  const className = `header-menu-${viewport}`;
  const {close} = useAside();

  return (
    <nav className={className} role="navigation">
      {viewport === 'mobile' && (
        <NavLink
          end
          onClick={close}
          prefetch="intent"
          style={activeLinkStyle}
          to="/"
        >
          Home
        </NavLink>
      )}
      {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
        if (!item.url) return null;

        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        return (
          <NavLink
            className="header-menu-item"
            end
            key={item.id}
            onClick={close}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

function HeaderCtas({
  isLoggedIn,
  cart,
}: Pick<HeaderProps, 'isLoggedIn' | 'cart'>) {
  return (
    <nav className="header-ctas" role="navigation">
      <HeaderMenuMobileToggle />
      <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
        <Suspense fallback="Sign in">
          <Await resolve={isLoggedIn} errorElement="Sign in">
            {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Sign in')}
          </Await>
        </Suspense>
      </NavLink>
      <SearchToggle />
      <CartToggle cart={cart} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  const {open} = useAside();
  return (
    <button
      className="header-menu-mobile-toggle reset"
      onClick={() => open('mobile')}
    >
      <h3>☰</h3>
    </button>
  );
}

function SearchToggle() {
  const {open} = useAside();
  return (
    <button className="reset" onClick={() => open('search')}>
      Search
    </button>
  );
}

function CartBadge({count}: {count: number | null}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();

  return (
    <a
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        } as CartViewPayload);
      }}
    >
      Cart {count === null ? <span>&nbsp;</span> : count}
    </a>
  );
}

function CartToggle({cart}: Pick<HeaderProps, 'cart'>) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue() as CartApiQueryFragment | null;
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
      items: [],
    },
  ],
};

function activeLinkStyle({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'black',
  };
}
