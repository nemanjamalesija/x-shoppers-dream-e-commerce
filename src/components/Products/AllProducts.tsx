import { useProductsContext } from '../../productsContext';
import './allProducts.css';
import SortByForm from './SortByForm';
import ProductsApi from './ProductsApi';

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
      <ProductsApi />
    </div>
  );
};

export default Products;
