import { useProductsContext } from '../contexts/productsContext';
import Sidebar from '../components/Products/Sidebar/Sidebar';
import AllProducts from '../components/Products/AllProducts';
import Loading from '../components/Loading';
import './products.css';

const Products = () => {
  const { loading } = useProductsContext();

  if (loading) return <Loading />;

  return (
    <section className="section section-products">
      <div className="container container-products">
        <Sidebar />
        <AllProducts />
      </div>
    </section>
  );
};

export default Products;
