import { Link } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';
import '../../pages/nav.css';

const NavSticky = () => {
  return (
    <section className="section-nav">
      <nav className="container nav nav">
        <div className="logo-div">
          <BsBag className="shopping-icon" />
          <span className="logo-text"> X Shoppers dream</span>
        </div>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link className="nav-list-item-link" to="/">
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-list-item">
            <Link className="nav-list-item-link" to="about">
              <span>About</span>
            </Link>
          </li>
          <li className="nav-list-item">
            <Link className="nav-list-item-link" to="products">
              <span>Products</span>
            </Link>
          </li>
        </ul>
        <div className="shopping-card-div">
          <BsBag className="shopping-icon" />
        </div>
      </nav>
    </section>
  );
};

export default NavSticky;
