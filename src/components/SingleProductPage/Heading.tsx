import './singleProductPage.css';
type headingProps = { name: string };

const Heading = ({ name }: headingProps) => {
  return <h2 className="heading-secondary heading-single-article">{name}</h2>;
};

export default Heading;
