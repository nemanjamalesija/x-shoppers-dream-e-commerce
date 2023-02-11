import CreedArticle from './CreedArticle';
import { creeds } from '../../utils/creedCards';
import './creeds.css';

const Creeds = () => {
  return (
    <section className="section section-creeds">
      <div className="container container-creeds">
        <header className="creeds-header">
          <h3 className="heading-tertiary heading-tertiary-creeds">About us</h3>
          <p className="creeds-paragraph">
            Consectetur, non aspernatur nam soluta, <br></br>
            et more.
          </p>
        </header>
        <div className="creeds-cards-div">
          {creeds.map((el) => {
            return <CreedArticle key={el.id} {...el} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Creeds;
