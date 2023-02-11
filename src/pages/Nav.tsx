import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants/navLinks';
import { BsBag } from 'react-icons/bs';
import './nav.css';

import './nav.css';

const Nav = () => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <section className="section-nav">
      <nav className="container nav nav">
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
            const { id, name, classNameItem, link } = item;
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
                <li className={classNameItem}>{name}</li>
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
            5
          </span>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
