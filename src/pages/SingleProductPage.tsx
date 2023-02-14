import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductsContext } from '../productsContext';
import { currentProduct } from '../constants/types/productsTypes';
import { singleProductsURL } from '../utils/urls';
import {
  AddToCart,
  Heading,
  Stars,
  ProductDisplayInfo,
  Images,
  BackToProducts,
} from '../components/SingleProductPage';
import axios from 'axios';
import formatPrice from '../helpers/formatPrice';

const SingleProductPage = () => {
  const { productId } = useParams();
  const {
    state: { loading, currentProduct },
    dispatch,
  } = useProductsContext();

  useEffect(() => {
    const fetchSingleProduct = async (url: string) => {
      return await axios(url);
    };

    fetchSingleProduct(`${singleProductsURL}${productId}`).then((response) => {
      const { data } = response;
      dispatch({
        type: 'SET_CURRENT_PRODUCT',
        payload: data as currentProduct,
      });
    });
  }, [dispatch, productId]);

  if (loading) return <h2>...loading</h2>;

  const {
    images,
    reviews,
    name,
    stars,
    price,
    description,
    stock,
    company,
    id,
  } = currentProduct;

  console.log(images);

  return (
    <section className="section section-products">
      <div className="container container-single-product">
        <BackToProducts />
        <article className="single-product-article">
          <Images images={images} />
          <div className="single-product-article-text-area">
            <Heading name={name} />
            <Stars reviews={reviews} stars={stars} />
            <p className="single-product-article-price">{formatPrice(price)}</p>
            <p className="single-product-article-description">{description}</p>
            <ProductDisplayInfo stock={stock} company={company} SKU={id} />
            <AddToCart />
          </div>
        </article>
      </div>
    </section>
  );
};

export default SingleProductPage;
