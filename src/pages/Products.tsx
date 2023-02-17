import { useEffect } from 'react';
import { useProductsContext } from '../productsContext';
import AllProducts from '../components/Products/AllProducts';
import Loading from '../components/Loading';
import Sidebar from '../components/Sidebar/Sidebar';
import './products.css';
import { useRefsContext } from '../refsContext';

const Products = () => {
  const {
    state: { loading },
  } = useProductsContext();
  const { navRef } = useRefsContext();

  useEffect(() => {
    if (!navRef.current) return;
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
