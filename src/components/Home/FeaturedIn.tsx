import businessInsider from '../../images/logos/business-insider.png';
import forbes from '../../images/logos/forbes.png';
import techCrunch from '../../images/logos/techcrunch.png';
import newYorkTimes from '../../images/logos/the-new-york-times.png';
import usaToday from '../../images/logos/usa-today.png';
import './featuredIn.css';

const Featuredin = () => {
  return (
    <section className="section-featured-in">
      <div className="container container-featured-in">
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
