import { ImStarFull, ImStarHalf, ImStarEmpty } from 'react-icons/im';
import SingleStar from './SingleStar';

type starsProps = { stars: number; reviews: number };

const Stars = ({ reviews, stars }: starsProps) => {
  const createStarsArray = (stars: number) => {
    const starsArray = [];

    for (let i = 0; i < 5; i++) {
      let halfStar = i + 0.5;

      if (stars >= i + 1) starsArray.push(<ImStarFull />);
      else if (stars >= halfStar) starsArray.push(<ImStarHalf />);
      else starsArray.push(<ImStarEmpty />);
    }

    return starsArray;
  };

  const displayStars = createStarsArray(stars);

  return (
    <div className="stars-reviews-div">
      <span className="rating">{stars}</span>
      <div className="stars-div">
        {displayStars.map((item, i) => (
          <SingleStar key={i} item={item} />
        ))}
      </div>

      <p className="single-product-article-review">
        ({reviews} customer ratings)
      </p>
    </div>
  );
};

export default Stars;
