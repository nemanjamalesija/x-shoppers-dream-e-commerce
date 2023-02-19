import { useEffect, useState } from 'react';
import { useProductsContext } from '../productsContext';
import AllProducts from '../components/Products/AllProducts';
import Loading from '../components/Loading';
import Sidebar from '../components/Sidebar/Sidebar';
import './products.css';
import { useRefsContext } from '../refsContext';
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';

const Products = () => {
  const {
    state: { loading },
  } = useProductsContext();
  const { navRef } = useRefsContext();
  const [isSidebarHidden, setIsSidebarHidden] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  useEffect(() => {
    if (!navRef.current) return;
    window.scrollTo(0, 0);
    navRef.current.classList.remove('sticky');
  }, [navRef]);

  if (loading) return <Loading />;

  return (
    <section className="section section-products">
      <div className="container container-products">
        <Sidebar isSidebarHidden={isSidebarHidden} />
        <AllProducts />
      </div>
      <button className="btn-sidebar" onClick={toggleSidebar}>
        <BsReverseLayoutTextSidebarReverse />
      </button>
      <div className={isSidebarHidden ? 'overlay-hidden' : 'overlay'}></div>
    </section>
  );
};

export default Products;
