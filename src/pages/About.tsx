import { useEffect } from 'react';
import aboutGroup from '../utils/images/aboutGroup.jpg';
import { useProductsContext } from '../productsContext';
import './about.css';

const About = () => {
  const { navRef } = useProductsContext();

  useEffect(() => {
    if (!navRef.current) return;
    navRef.current.classList.remove('sticky');
  }, [navRef]);

  return (
    <section className="section-about-us">
      <div className="container-about-us">
        <h4 className="heading-about">About us</h4>
        <div className="photo-container">
          <img src={aboutGroup} alt="About" className="about-photo" />
        </div>
        <div className="about-text-div">
          <blockquote className="paragraph-about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quel optio sapiente ducimus, adipisci nostrum molestiae non vitae,
            repelli facere temporibus amet modi fugit expedita ut hic.
          </blockquote>
          <blockquote className="paragraph-about">
            Dolores distinctio consequuntur totam atque nulla, dolor quasi mon
            explicabo? Perferendis at dolorum sequi reiciendis enim ex laborum
            temporibus dolor.
          </blockquote>
          <blockquote className="paragraph-about">
            Totam atque nulla, dolor quasi numquam explicabo? Perferendis at
            soluta quidem dolorum sequi reiciendis enim ex laborum temporibs
            dolor soluta quidem dolorum sequi enim ex laborum temporibus.
          </blockquote>
          <blockquote className="paragraph-about">
            Repellendus, facere deleniti quo optio nihil beatae dolorum
            explicailt quas quasi, nam debitis distinctio voluptate officiis et,
            tempore.
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
