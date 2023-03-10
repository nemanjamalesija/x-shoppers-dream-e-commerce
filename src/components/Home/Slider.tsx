import { useEffect, useState } from 'react';
import useObserver from '../../helpers/useObserver';
import { useRefsContext } from '../../refsContext';
import { slides } from '../../utils/Slides';
import './slider.css';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [isUnderlineFilled, setIsUnderlineFilled] = useState(false);
  const { sliderRef } = useRefsContext();
  const { sectionObserver, isObserving } = useObserver();

  const sliderObserver = sectionObserver();

  const nextSlideHandler = () => {
    setIsUnderlineFilled(false);
    if (index === -3) setIndex(0);
    else setIndex((prev) => prev - 1);
  };

  const prevSlideHandler = () => {
    setIsUnderlineFilled(false);
    if (index === 0) setIndex(-3);
    else setIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (!sliderRef.current) return;
    setIsUnderlineFilled(true);
    sliderObserver.observe(sliderRef.current);

    let slider = setInterval(() => {
      setIsUnderlineFilled(false);
      nextSlideHandler();
    }, 5000);
    return () => {
      sliderObserver.disconnect();
      clearInterval(slider);
    };
    // eslint-disable-next-line
  }, [index, isUnderlineFilled, isObserving]);

  return (
    <section
      className={`${
        isObserving
          ? 'section-slider section-tansform'
          : 'section-slider section-tansform section--hidden '
      }`}
      ref={sliderRef}
    >
      <div className="container-slider">
        <header>
          <h3 className="heading-tertiary">Testimonials</h3>
          <h4 className="heading-fourth">
            Discover the stories of our delighted customers - thousands and
            counting!
          </h4>
        </header>
        <div className="slider">
          {slides.map((slide, i) => {
            const { heading, quote, img, location, author } = slide;
            return (
              <div
                key={i}
                className={`slide slide-${i}`}
                style={{
                  transform: `translateX(${(index + i) * 100}%)`,
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
