import { Link } from 'react-router-dom';

const EmptyCart = () => {
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
};

export default EmptyCart;
