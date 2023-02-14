import './singleProductPage.css';
import { useProductsContext } from '../../productsContext';

const QuantityToAddToCart = () => {
  const {
    state: {
      currentProduct: { quantity },
      incrementQuantityHandler,
      decrementQuantityHandler,
    },
  } = useProductsContext();

  return (
    <div className="add-to-cart-logic-div">
      <button
        className="btn btn-decrement-products"
        onClick={() => decrementQuantityHandler(quantity as number)}
      >
        -
      </button>
      <p className="purchased-products">{quantity}</p>
      <button
        className="btn btn-increment-products"
        onClick={() => incrementQuantityHandler(quantity as number)}
      >
        +
      </button>
    </div>
  );
};

export default QuantityToAddToCart;
