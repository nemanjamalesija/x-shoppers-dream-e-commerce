import heroImg from '../../utils/images/heroImg.png';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavDummy from './NavDummy';
import { useProductsContext } from '../../productsContext';
import './hero.css';

const Hero = () => {
  const { navRef, heroRef } = useProductsContext();
  const [navHeight, setNavRefHeight] = useState(0);
  const [isObserving, setIsObserving] = useState(false);
  const [navSticky, setnavSticky] = useState(false);

  const navObserverOptionsObject = {
    root: null,
    rootMargin: `${-navHeight + 130}px`,
  };

  const navObserverFunctionCallback = (entries: any) => {
    const [entry] = entries;
    setIsObserving(entry.isIntersecting);

    if (!navRef.current) return;

    if (!entry.isIntersecting) {
      setnavSticky(true);
      navRef.current.classList.add('sticky');
    } else {
      setnavSticky(false);
      navRef.current.classList.remove('sticky');
    }
  };

  const observer = () => {
    return new IntersectionObserver(
      navObserverFunctionCallback,
      navObserverOptionsObject
    );
  };

  const heroObserver = observer();

  useEffect(() => {
    if (!navRef.current) return;
    if (!heroRef.current) return;

    setNavRefHeight(navRef.current.clientHeight);
    heroObserver.observe(heroRef.current);

    return () => heroObserver.disconnect();
  }, [heroRef, navRef, isObserving, heroObserver]);

  return (
    <>
      {navSticky && <NavDummy />}
      <section className="section section-home" ref={heroRef}>
        <div className="container home-container">
          <div className="home-left">
            <div className="home-text-area">
              <h1 className="heading-primary">
                Furniture design to<br></br>make you feel at home
              </h1>
              <p className="home-paragraph">
                Create your perfect space with our designs.
              </p>
            </div>
            <div className="home-buttons-div">
              <Link to="products">
                <button className="btn btn-home-explore">
                  Explore products
                </button>
              </Link>
              <Link to="about">
                <button className="btn home-button-about">About us</button>
              </Link>
            </div>
          </div>

          <div className="home-right">
            <img className="image" alt="Hero" src={heroImg} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
