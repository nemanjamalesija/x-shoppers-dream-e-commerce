import { useState } from 'react';
import { currentProductImage } from '../../constants/types/productsTypes';

type propsImages = { images: currentProductImage[] };

const Images = ({ images }: propsImages) => {
  const [activeimage, setActiveImage] = useState(0);

  return (
    <div className="single-product-article-imgs-div">
      <div className="single-product-article-main-img-div">
        <img
          className="single-product-main-img"
          src={`${images[activeimage].url}`}
          alt={`${images[activeimage].filename}`}
        />
      </div>
      <div className="single-product-article-single-imgs-div">
        {images.map((item, i) => {
          return (
            <img
              className={`${
                i === activeimage
                  ? 'single-product-article-single-img image-active'
                  : 'single-product-article-single-img'
              }`}
              key={i}
              src={item.url}
              alt={item.filename}
              onClick={() => setActiveImage(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Images;
