import { useProductsContext } from '../../productsContext';
import './sidebar.css';

type categoriesProps = {
  currentCategory: string;
  categories: string[];
};

const Categories = ({ currentCategory, categories }: categoriesProps) => {
  const {
    state: { storeProductsFilterValuesHandler },
  } = useProductsContext();
  return (
    <div className="products-categories">
      <h5 className="heading-fifth sidebar-filter-title">Category</h5>
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
