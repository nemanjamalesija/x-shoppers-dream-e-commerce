import { Link } from 'react-router-dom';
import heroImg from '../../constants/images/heroImg.png';
import './hero.css';

const Hero = () => {
  return (
    <>
      <section className="section section-home">
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
