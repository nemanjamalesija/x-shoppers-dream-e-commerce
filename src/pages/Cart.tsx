import { useCartContext } from '../cartContext';
import CartCategories from '../components/Cart/CartCategories';
import CartItem from '../components/Cart/CartItem';
import EmptyCart from '../components/Cart/EmptyCart';
import TotalAmount from '../components/Cart/TotalAmount';
import '../components/Cart/cart.css';
const Cart = () => {
  const {
    state: { cart },
  } = useCartContext();

  if (cart.length === 0) return <EmptyCart />;

  return (
    <>
      <section className="section section-cart">
        <div className="container-cart cart-container-width">
          <CartCategories />
          {cart.map((item, i) => {
            return <CartItem key={i} {...item} />;
          })}
        </div>
      </section>
      <TotalAmount />
    </>
  );
};

export default Cart;
