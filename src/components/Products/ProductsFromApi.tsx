import { useProductsContext } from '../../productsContext';
import OneProduct from './OneProduct';

const ProductsFromApi = () => {
  const { filteredProducts } = useProductsContext();
  return (
    <div className="products-filter-div">
      {filteredProducts.map((item) => {
        return <OneProduct key={item.id} {...item} />;
      })}
    </div>
  );
};

export default ProductsFromApi;
