import businessInsider from '../../utils/images/businessInsider.png';
import forbes from '../../utils/images/forbes.png';
import techCrunch from '../../utils/images/techCrunch.png';
import newYorkTimes from '../../utils/images/newYorkTimes.png';
import usaToday from '../../utils/images/usaToday.png';
import './featuredIn.css';

const Featuredin = () => {
  return (
    <section className="section-featured-in">
      <div className="container-featured-in">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="logos">
          <img src={techCrunch} alt="Techcrunch logo" />
          <img src={businessInsider} alt="Business Insider logo" />
          <img src={newYorkTimes} alt="The New York Times logo" />
          <img src={forbes} alt="Forbes logo" />
          <img src={usaToday} alt="USA Today logo" />
        </div>
      </div>
    </section>
  );
};

export default Featuredin;
