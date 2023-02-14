import React from 'react';

import { Link } from 'react-router-dom';
import { useCartContext } from '../cartContext';
import '../components/Cart/cart.css';
import CartCategories from '../components/Cart/CartCategories';
import CartItem from '../components/Cart/CartItem';
import TotalAmount from '../components/Cart/TotalAmount';

const Cart = () => {
  const {
    state: { cart },
  } = useCartContext();

  if (cart.length === 0)
    return (
      <section className="section section-cart">
        <div className="container container-empty">
          <h2 className="heading-empty-cart">Your cart is empty...</h2>
          <div className="btn-empty-c-div">
            <Link to="/products">
              <button className="btn btn-cart-empty">Keep Shopping</button>
            </Link>
          </div>
        </div>
      </section>
    );

  return (
    <>
      <section className="section section-cart">
        <div className="container container-cart">
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
