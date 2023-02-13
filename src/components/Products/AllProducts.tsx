import { useEffect } from 'react';
import { useProductsContext } from '../../productsContext';
import SortByForm from './SortByForm';
import ProductsFromApi from './ProductsFromApi';
import './allProducts.css';

const Products = () => {
  const {
    navRef,
    state: { filteredProducts },
  } = useProductsContext();

  useEffect(() => {
    if (!navRef.current) return;
    window.scrollTo(0, 0);
    navRef.current.classList.remove('sticky');
  }, [navRef]);
  return (
    <div className="products-filter-sort-div">
      <div className="products-sort-div">
        <p className="products-number">
          {filteredProducts.length} products found
        </p>
        <hr className="products-line"></hr>
        <SortByForm />
      </div>
      <ProductsFromApi />
    </div>
  );
};

export default Products;
