import heroImg from '../../utils/images/heroImg.png';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import NavSticky from './NavSticky';
import { useObserverContext } from '../../observerContext';
import './hero.css';

const Hero = () => {
  const { navRef } = useObserverContext();
  const heroRef = useRef(null);
  const [navHeight, setNavRefHeight] = useState(0);
  const [isObserving, setIsObserving] = useState(false);
  const [navSticky, setnavSticky] = useState(false);

  const navObserverOptionsCallback = React.useCallback(() => {
    return {
      root: null,
      rootMargin: `${-navHeight + 125}px`,
    };
  }, [navHeight]);

  const navObserverOptionsObject = navObserverOptionsCallback();

  const navObserverFunctionCallback = React.useCallback(() => {
    return function (entries: any) {
      const [entry] = entries;
      setIsObserving(entry.isIntersecting);

      if (!entry.isIntersecting) {
        setnavSticky(true);
        navRef.current.classList.add('sticky');
      } else {
        setnavSticky(false);
        navRef.current.classList.remove('sticky');
      }
    };
  }, [navRef]);

  const navObserverOptionsFunction = navObserverFunctionCallback();

  const observer = React.useCallback(() => {
    return new IntersectionObserver(
      navObserverOptionsFunction,
      navObserverOptionsObject
    );
  }, [navObserverOptionsFunction, navObserverOptionsObject]);

  const heroObserver = observer();

  useEffect(() => {
    setNavRefHeight(navRef.current.clientHeight);
    const heroSection = heroRef.current as any;

    heroObserver.observe(heroSection as Element);

    return () => heroObserver.unobserve(heroSection);
  }, [isObserving, navRef, heroObserver]);

  return (
    <>
      {navSticky && <NavSticky />}
      <section className="section section-home" ref={heroRef}>
        <div className="container home-container">
          <div className="home-left">
            <div className="home-text-area">
              <h1 className="heading-primary">
                Furniture design to<br></br>make you feel at home
              </h1>
              <p className="home-paragraph">
                Lorem ipsum dolor, sit amet consectetur.
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
