import { useState } from 'react';
import { slides } from '../../utils/Slides';
import './slider.css';

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <section className="section-slider">
      <div className="container container-slider">
        <div className="slider">
          {slides.map((slide, i) => {
            const { heading, quote, img, location, author } = slide;
            return (
              <div className={`slide slide-${i}`}>
                <div className="testimonial">
                  <h5 className="heading-testimonial">{heading}</h5>
                  <blockquote className="quote-testimonial">{quote}</blockquote>
                  <div className="author-testimonial-div">
                    <img
                      src={img}
                      alt={`slide image ${i + 1}`}
                      className="image-testimonial"
                    />
                    <h6 className="name-testimonial">{author}</h6>
                    <p className="location-testimonial">{location}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Slider;
