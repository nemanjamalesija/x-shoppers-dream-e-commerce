import { BiMinus, BiPlus } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import formatPrice from '../../helpers/formatPrice';
import './cart.css';

type cartItemProps = {
  id: string;
  quantity: number;
  image: string;
  price: number;
  currentColor: string;
  name: string;
};

const CartItem = ({
  id,
  quantity,
  image,
  price,
  currentColor,
  name,
}: cartItemProps) => {
  const subTotal = price * quantity;

  return (
    <article className="cart-item">
      <div className="cart-img-h-color">
        <img className="cart-img" src={image} alt={name} />
        <div className="h-color">
          <h5 className="heading-fifth">{name}</h5>
          <div className="cart-color-description">
            <p>Color:</p>
            <button
              className="product-color-item active"
              style={{ backgroundColor: `${currentColor}` }}
            ></button>
          </div>
        </div>
      </div>
      <h5 className="heading-fifth heading-cart-price">{formatPrice(price)}</h5>
      <div className="cart-quantity">
        <button className="btn btn-increment-products">
          <BiMinus />
        </button>
        <p className="quantity-display">{quantity}</p>
        <button className="btn btn-increment-products">
          <BiPlus />
        </button>
      </div>
      <p className="heading-fifth heading-cart-price">
        {formatPrice(subTotal)}
      </p>
      <button className="remove-btn">
        <AiFillDelete className="icon-remove" />
      </button>
    </article>
  );
};

export default CartItem;
