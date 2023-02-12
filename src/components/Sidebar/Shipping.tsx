import { useProductsContext } from '../../productsContext';
import './sidebar.css';

type shippingProps = { shipping: boolean };

const Shipping = ({ shipping }: shippingProps) => {
  const { storeProductsFilterValuesHandler } = useProductsContext();
  return (
    <div className="product-shipping-container">
      <h5 className="heading-fifth">Free Shipping</h5>
      <input
        type="checkbox"
        name="shipping"
        checked={shipping}
        onChange={storeProductsFilterValuesHandler}
      />
    </div>
  );
};

export default Shipping;
