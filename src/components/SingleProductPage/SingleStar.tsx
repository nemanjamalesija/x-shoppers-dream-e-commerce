import './singleProductPage.css';
type singleStarProps = { item: JSX.Element };

const SingleStar = ({ item }: singleStarProps) => {
  return <span className="stars">{item}</span>;
};

export default SingleStar;
