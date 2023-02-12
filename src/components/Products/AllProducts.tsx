import { useProductsContext } from '../../productsContext';
import OneProduct from './OneProduct';
import './allProducts.css';

const Products = () => {
  const { filteredProducts } = useProductsContext();
  return (
    <div className="products-filter-sort-div">
      <div className="products-sort-div">
        <p className="products-number">
          {filteredProducts.length} products find
        </p>
        <hr className="products-line"></hr>
        <form className="sort-products-form">
          <label className="sort-products-label">Sort by</label>
          <select name="sort">
            <option value="price lowest">Price (Lowest)</option>
            <option value="price highest">Price (Highest)</option>
            <option value="name a-z">Name (A-Z)</option>
            <option value="name z-a">Name (Z-A)</option>
          </select>
        </form>
      </div>
      <div className="products-filter-div">
        {filteredProducts.map((item) => {
          return <OneProduct key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Products;
