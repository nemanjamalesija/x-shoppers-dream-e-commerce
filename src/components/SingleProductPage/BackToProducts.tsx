import { useNavigate } from 'react-router-dom';
const BackToProducts = () => {
  const navigate = useNavigate();

  return (
    <div className="back-to-products-div">
      <a href="#">
        <button
          className="btn btn-back-to-products"
          onClick={() => navigate(-1)}
        >
          Back to products &#129059;
        </button>
      </a>
    </div>
  );
};

export default BackToProducts;
