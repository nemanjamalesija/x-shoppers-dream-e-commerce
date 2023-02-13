import { useEffect } from 'react';
import { useProductsContext } from '../../productsContext';
import './allProducts.css';
import SortByForm from './SortByForm';
import ProductsFromApi from './ProductsFromApi';
import { useObserverContext } from '../../observerContext';

const Products = () => {
  const { filteredProducts } = useProductsContext();
  const { navRef } = useObserverContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    navRef.current.classList.remove('sticky');
  }, [navRef]);
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
