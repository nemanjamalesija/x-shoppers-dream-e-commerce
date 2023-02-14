type ProductDisplayInfoProps = { stock: number; company: string; SKU: string };

const ProductDisplayInfo = ({
  stock,
  company,
  SKU,
}: ProductDisplayInfoProps) => {
  return (
    <div className="single-product-article-info-container">
      <div className="single-product-article-info-div">
        <h5 className="heading-fifth">Avaliable:</h5>
        <span className="single-product-article-info">{stock}</span>
      </div>
      <div className="single-product-article-info-div">
        <h5 className="heading-fifth">SKU:</h5>
        <span className="single-product-article-info">{SKU}</span>
      </div>
      <div className="single-product-article-info-div info-last-child">
        <h5 className="heading-fifth">Brand:</h5>
        <span className="single-product-article-info">{company}</span>
      </div>
    </div>
  );
};

export default ProductDisplayInfo;
