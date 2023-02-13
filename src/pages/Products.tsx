import { useEffect } from 'react';
import { useProductsContext } from '../productsContext';
import AllProducts from '../components/Products/AllProducts';
import Loading from '../components/Loading';
import Sidebar from '../components/Sidebar/Sidebar';
import './products.css';
import { useObserverContext } from '../observerContext';

const Products = () => {
  const { loading } = useProductsContext();
  const { navRef } = useObserverContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    navRef.current.classList.remove('sticky');
  }, [navRef]);

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
