import {SearchHeader, Navbar, CartCard, CheckoutForm} from '../components';

const cardsPlaceholderArray = Array.from({length: 3}, () => 1);
const cartItem = {
  image: '/images/cart-image.png',
  name: 'Tomatoes',
  quantity: '2',
  price: '80',
  quantityType: 'kg',
};
const Cart = () => {
  return (
    <>
      <SearchHeader />
      <Navbar />
      <main className=" md:p-6 flex mb-1 gap-6">
        <div className="md:max-w-[70%] md:w-[70%]">
          <div className="mb-10">
            <h2 className="text-primary font-josefin font-extrabold text-[52px] leading-[52px]">
              My Cart
            </h2>
            <span className="text-accent font-bold text-[24px]">
              You have 2 products
            </span>
          </div>
          <div className="flex flex-col gap-4">
            {cardsPlaceholderArray.map((_, i) => (
              <CartCard key={i} item={cartItem} />
            ))}
          </div>
        </div>
        <CheckoutForm />
      </main>
    </>
  );
};

export default Cart;
