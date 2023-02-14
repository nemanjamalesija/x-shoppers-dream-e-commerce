import React from 'react';
import { IoIosCheckmark } from 'react-icons/io';
import { useProductsContext } from '../../productsContext';

const Colors = () => {
  const {
    state: {
      currentProduct: { colors, currentColor },
    },
    dispatch,
  } = useProductsContext();

  const selectColorHandler = (color: string) => {
    dispatch({ type: 'SET_CURRENT_PRODUCT_COLOR', payload: color });
  };

  return (
    <div className="single-product-article-colors-div">
      <h5 className="heading-fifth">Colors:</h5>
      <div>
        {colors?.map((item, i) => (
          <button
            key={i}
            className={`${
              currentColor === item
                ? 'product-color-item color-active'
                : 'product-color-item'
            }`}
            style={{ backgroundColor: `${item}` }}
            onClick={() => selectColorHandler(item)}
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
