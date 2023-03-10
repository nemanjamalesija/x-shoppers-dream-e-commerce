import { useProductsContext } from '../../productsContext';
import './sidebar.css';

type shippingProps = { shipping: boolean };

const Shipping = ({ shipping }: shippingProps) => {
  const {
    state: { storeProductsFilterValuesHandler },
  } = useProductsContext();
  return (
    <div className="product-shipping-container">
      <h5 className="heading-fifth sidebar-filter-title">Free Shipping</h5>
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
