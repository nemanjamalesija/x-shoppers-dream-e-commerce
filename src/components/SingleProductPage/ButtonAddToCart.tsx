import './singleProductPage.css';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../../productsContext';
import { useCartContext } from '../../cartContext';

const ButtonAddToCart = () => {
  const {
    state: {
      currentProduct,
      currentProduct: { currentColor, id, quantity },
    },
  } = useProductsContext();

  const {
    state: { addToCartHandler },
  } = useCartContext();

  return (
    <Link to="/cart">
      <button
        className="btn btn-add-to-cart"
        onClick={() =>
          addToCartHandler(id, currentColor, quantity, currentProduct)
        }
      >
        Add to cart
      </button>
    </Link>
  );
};

export default ButtonAddToCart;
