import { useEffect, useState } from 'react';
import { slides } from '../../utils/Slides';
import './slider.css';

const Slider = () => {
  const [activeSlideIndex, setactiveSlideIndex] = useState(0);
  const [isUnderlineFilled, setIsUnderlineFilled] = useState(false);
  const nextSlideHandler = () => {
    setIsUnderlineFilled(false);
    if (activeSlideIndex === -3) setactiveSlideIndex(0);
    else setactiveSlideIndex((prev) => prev - 1);
  };

  const prevSlideHandler = () => {
    setIsUnderlineFilled(false);
    if (activeSlideIndex === 0) setactiveSlideIndex(-3);
    else setactiveSlideIndex((prev) => prev + 1);
  };

  useEffect(() => {
    setIsUnderlineFilled(true);

    let slider = setInterval(() => {
      setIsUnderlineFilled(false);
      nextSlideHandler();
    }, 5000);
    return () => {
      clearInterval(slider);
    };
    // eslint-disable-next-line
  }, [activeSlideIndex, isUnderlineFilled]);

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
                  <div
                    className={`${
                      isUnderlineFilled
                        ? 'underline-slider'
                        : 'underline-slider underline-none'
                    }`}
                  ></div>
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
              </div>
            );
          })}
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
        </div>
      </div>
    </section>
  );
};

export default Slider;
