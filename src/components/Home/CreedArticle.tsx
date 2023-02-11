import './creeds.css';

type creedsArticleProps = {
  icon: JSX.Element;
  name: string;
  description: string;
};

const CreedsArticle = ({ icon, name, description }: creedsArticleProps) => {
  return (
    <article className="creed-article">
      <div className="creed-icon-div">
        <span>{icon}</span>
      </div>
      <h3 className="creed-article-heading ">{name}</h3>
      <p className="creed-article-paragraph">{description}</p>
    </article>
  );
};

export default CreedsArticle;
