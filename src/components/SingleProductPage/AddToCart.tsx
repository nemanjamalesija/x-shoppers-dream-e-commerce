import { useProductsContext } from '../../productsContext';
import ButtonAddToCart from './ButtonAddToCart';
import Colors from './Colors';
import QuantityAddToCart from './QuantityAddToCart';

const AddToCart = () => {
  const {
    state: {
      currentProduct: { stock },
    },
  } = useProductsContext();

  return (
    <div
      className={`${
        stock === 0
          ? 'single-product-add-to-cart hidden'
          : 'single-product-add-to-cart'
      }`}
    >
      <Colors />
      <QuantityAddToCart />
      <ButtonAddToCart />
    </div>
  );
};

export default AddToCart;
