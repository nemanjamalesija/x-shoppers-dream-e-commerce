import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../utils/navLinks';
import { BsBag } from 'react-icons/bs';
import './nav.css';
import { useProductsContext } from '../productsContext';
import { useCartContext } from '../cartContext';
const Nav = () => {
  const { navRef } = useProductsContext();
  const {
    state: { totalQuantity },
  } = useCartContext();
  const [activeLink, setActiveLink] = useState(0);
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return (
    <section
      className={!isAboutPage ? 'section-nav' : 'section-nav-about'}
      ref={navRef}
    >
      <nav className="nav">
        <Link
          className="nav-list-item-link"
          to="/"
          onClick={() => setActiveLink(0)}
        >
          <div className="logo-div">
            <BsBag className="shopping-icon" />
            <span className="logo-text"> X Shoppers Dream</span>
          </div>
        </Link>
        <ul className="nav-list">
          {navLinks.map((item, i) => {
            const { id, name, link } = item;
            return (
              <Link
                key={id}
                className={`${
                  activeLink === i
                    ? 'nav-list-item-link active-link'
                    : "nav-list-item-link'"
                }`}
                to={link}
                onClick={() => setActiveLink(i)}
              >
                <li className="nav-list-item">{name}</li>
              </Link>
            );
          })}
        </ul>
        <div className="shopping-card-div">
          <div className="icon-text-cart">
            <span>Cart</span>
            <Link to="cart" className="cart-icon">
              <BsBag className="shopping-icon" />
            </Link>
          </div>
          <span className="badge" id="lblCartCount">
            {totalQuantity}
          </span>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
