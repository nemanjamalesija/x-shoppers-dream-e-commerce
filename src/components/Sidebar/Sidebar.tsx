import { useState, useEffect } from 'react';
import TextInput from './TextInput';
import Categories from './Categories';
import Companies from './Companies';
import Colors from './Colors';
import Price from './Price';
import Shippingg from './Shipping';
import ButtonClearFilters from './ButtonClearFilters';
import { useProductsContext } from '../../productsContext';
import './sidebar.css';

type sidebarProps = {
  isSidebarHidden: boolean;
};

const Sidebar = ({ isSidebarHidden }: sidebarProps) => {
  const [width, setWidth] = useState(window.innerWidth);
  const {
    state: {
      loading,
      products,
      filters: {
        name,
        currentCategory,
        currentCompany,
        currentColor,
        price,
        maxPrice,
        shipping,
      },
    },
  } = useProductsContext();

  const categories = Array.from(
    new Set(['All', ...products.map((prod) => prod.category)])
  );

  const companies = Array.from(
    new Set(['All', ...products.map((prod) => prod.company)])
  );
  const colors = Array.from(
    new Set([...products.flatMap((prod) => prod.colors)])
  );

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const baseClass = width <= 769 ? 'sidebar-fixed' : 'products-sidebar';
  const modeClass = isSidebarHidden && width <= 769 ? 'sidebar-hidden' : '';

  if (loading)
    return (
      <section className="section section-products">
        <div className="container container-products">
          <h1>Loading...</h1>
        </div>
      </section>
    );

  return (
    <aside className={`${baseClass} ${modeClass}`}>
      <TextInput name={name as string} />
      <Categories currentCategory={currentCategory} categories={categories} />
      <Companies currentCompany={currentCompany} companies={companies} />
      <Colors colors={colors} currentColor={currentColor} />
      <Price price={price} maxPrice={maxPrice} />
      <Shippingg shipping={shipping} />
      <ButtonClearFilters />
    </aside>
  );
};

export default Sidebar;
