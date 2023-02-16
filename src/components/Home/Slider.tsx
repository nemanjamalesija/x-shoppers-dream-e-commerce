import { useEffect, useState } from 'react';
import { slides } from '../../utils/Slides';
import './slider.css';

const Slider = () => {
  const [activeSlideIndex, setactiveSlideIndex] = useState(0);
  const nextSlideHandler = () => {
    if (activeSlideIndex === -3) setactiveSlideIndex(0);
    else setactiveSlideIndex((prev) => prev - 1);
  };

  const prevSlideHandler = () => {
    if (activeSlideIndex === 0) setactiveSlideIndex(-3);
    else setactiveSlideIndex((prev) => prev + 1);
  };

  useEffect(() => {
    let slider = setInterval(() => {
      nextSlideHandler();
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [activeSlideIndex]);

  return (
    <section className="section-slider">
      <div className="container-slider">
        <h3 className="heading-tertiary">Testimonials</h3>
        <p className="heading-tertiary-paragraph">
          Discover the stories of our delighted customers - thousands and
          counting!"
        </p>
        <div className="slider">
          {slides.map((slide, i) => {
            const { heading, quote, img, location, author } = slide;
            return (
              <div
                key={i}
                className={`slide slide-${i}`}
                style={{
                  transform: `translateX(${(activeSlideIndex + i) * 100}%)`,
                }}
              >
                <div className="testimonial">
                  <h5 className="heading-testimonial">{heading}</h5>
                  <div className="underline"></div>
                  <blockquote className="quote-testimonial">{quote}</blockquote>
                  <div className="author-testimonial-div">
                    <img
                      src={img}
                      alt={`slide ${i + 1}`}
                      className="image-testimonial"
                    />
                    <h6 className="name-testimonial">{author}</h6>
                    <p className="location-testimonial">{location}</p>
                  </div>
                </div>
                <button
                  className="slider__btn slider__btn--left"
                  onClick={prevSlideHandler}
                >
                  &larr;
                </button>
                <button
                  className="slider__btn slider__btn--right"
                  onClick={nextSlideHandler}
                >
                  &rarr;
                </button>
                <div className="dots"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Slider;
