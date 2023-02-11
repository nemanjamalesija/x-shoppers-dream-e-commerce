import TextInput from './TextInput';
import Categories from './Categories';
import Companies from './Companies';
import Colors from './Colors';
import Price from './Price';
import Shippingg from './Shipping';
import ButtonClearFilters from './ButtonClearFilters';

import './sidebar.css';
import { useProductsContext } from '../../productsContext';

const Sidebar = () => {
  const { loading, products } = useProductsContext();

  const {
    filters: {
      name,
      currentCategory,
      currentCompany,
      currentColor,
      price,
      maxPrice,
      shipping,
    },
  } = useProductsContext();

  console.log(products);

  const categories = Array.from(
    new Set(['all', ...products.map((prod) => prod.category)])
  );

  const companies = Array.from(
    new Set(['all', ...products.map((prod) => prod.company)])
  );
  const colors = Array.from(
    new Set([...products.flatMap((prod) => prod.colors)])
  );

  if (loading)
    return (
      <section className="section section-products">
        <div className="container container-products">
          <h1>Loading...</h1>
        </div>
      </section>
    );

  return (
    <aside className="products-sidebar">
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
