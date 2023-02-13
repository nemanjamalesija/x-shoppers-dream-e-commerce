import { useEffect } from 'react';
import storyImg from '../utils/images/storyImg.jpg';
import { useObserverContext } from '../observerContext';
import './about.css';

const About = () => {
  const { navRef } = useObserverContext();

  useEffect(() => {
    navRef.current.classList.remove('sticky');
  }, [navRef]);

  return (
    <section className="section section-products">
      <div className="container container-about-us">
        <div className="about-us-img-text-container">
          <div className="about-image-container">
            <img className="about-us-image" src={storyImg} alt="sofa" />
          </div>
          <div className="text-about-us-div">
            <h2 className="heading-secondary heading-secondary-about-us ">
              Our story
            </h2>
            <div className="underline"></div>
            <p className="about-us-parapgraph ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              accusantium sapiente tempora sed dolore esse deserunt eaque
              excepturi, delectus error accusamus vel eligendi, omnis beatae.
              Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
              dolore, obcaecati incidunt sequi blanditiis est exercitationem
              molestiae delectus saepe odio eligendi modi porro eaque in libero
              minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
              ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
              similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
              iste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
