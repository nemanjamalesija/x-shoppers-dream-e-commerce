import { useProductsContext } from '../../productsContext';
import './allProducts.css';
import SortByForm from './SortByForm';
import ProductsFromApi from './ProductsFromApi';

const Products = () => {
  const { filteredProducts } = useProductsContext();
  return (
    <div className="products-filter-sort-div">
      <div className="products-sort-div">
        <p className="products-number">
          {filteredProducts.length} products find
        </p>
        <hr className="products-line"></hr>
        <SortByForm />
      </div>
      <ProductsFromApi />
    </div>
  );
};

export default Products;
