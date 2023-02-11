import { useProductsContext } from '../../productsContext';

type categoriesProps = {
  currentCategory: string;
  categories: string[];
};

const Categories = ({ currentCategory, categories }: categoriesProps) => {
  const { storeProductsFilterValuesHandler } = useProductsContext();
  return (
    <div className="products-categories">
      <h5 className="heading-fifth">Category</h5>
      {categories.map((item, i) => (
        <button
          key={i}
          className={`${
            currentCategory === item
              ? 'product-category-btn product-btn-active'
              : 'product-category-btn'
          }`}
          data-type="currentCategory"
          data-value={item}
          onClick={storeProductsFilterValuesHandler}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;
