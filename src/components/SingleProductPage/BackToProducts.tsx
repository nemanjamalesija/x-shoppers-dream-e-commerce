import { useNavigate } from 'react-router-dom';
import './singleProductPage.css';
const BackToProducts = () => {
  const navigate = useNavigate();

  return (
    <div className="back-to-products-div">
      <button className="btn btn-back-to-products" onClick={() => navigate(-1)}>
        Back to products &#129059;
      </button>
    </div>
  );
};

export default BackToProducts;
