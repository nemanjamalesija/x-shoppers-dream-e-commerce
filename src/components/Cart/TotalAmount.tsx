import { Link } from 'react-router-dom';
import { useCartContext } from '../../cartContext';
import formatPrice from '../../helpers/formatPrice';

const TotalAmount = () => {
  const {
    state: { totalPrice, shippingFee, clearCartHandler },
  } = useCartContext();
  const total = totalPrice + shippingFee;

  return (
    <section className="section section-total">
      <div className="container">
        <div className="total-buttons-top">
          <Link to="/products">
            <button className="btn btn-cart-empty">Keep Shopping</button>
          </Link>
          <button className="btn clear-cart" onClick={clearCartHandler}>
            Clear the Cart
          </button>
        </div>
        <div className="total-price-calculation-container">
          <div className="total-price-calculation">
            <h5 className="heading-subtotal">
              Subtotal: <span>{formatPrice(totalPrice)}</span>
            </h5>
            <p className="shipping-fee-p">
              Shipping Fee: <span>{formatPrice(shippingFee)}</span>
            </p>
            <hr className="underlines"></hr>
            <h4 className="heading-fourth heading-total">
              Order Total: <span>{formatPrice(total)}</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalAmount;
