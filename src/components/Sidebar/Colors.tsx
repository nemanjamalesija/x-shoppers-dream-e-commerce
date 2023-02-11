import { IoIosCheckmark } from 'react-icons/io';
import { useProductsContext } from '../../productsContext';
import './sidebar.css';

type colorsProps = { currentColor: string; colors: string[] };

const Colors = ({ currentColor, colors }: colorsProps) => {
  const { storeProductsFilterValuesHandler } = useProductsContext();

  return (
    <div className="product-colors">
      <h5 className="heading-fifth">Color</h5>
      <div className="product-colors-container">
        <button
          className={`${
            currentColor === 'All'
              ? 'product-category-btn product-btn-active'
              : 'product-category-btn'
          }`}
          name="currentColor"
          data-type="currentColor"
          data-value="All"
          onClick={storeProductsFilterValuesHandler}
        >
          All
        </button>
        {colors.map((item, i) => (
          <button
            key={i}
            className={`${
              currentColor === item
                ? 'product-color-item color-active'
                : 'product-color-item'
            }`}
            data-type="currentColor"
            data-value={item}
            onClick={storeProductsFilterValuesHandler}
            style={{ backgroundColor: `${item}` }}
          >
            <IoIosCheckmark
              className={`${
                currentColor === item
                  ? 'checkmark-icon'
                  : 'checkmark-icon hidden'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Colors;
