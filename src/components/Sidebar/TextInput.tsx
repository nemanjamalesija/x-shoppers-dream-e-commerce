import { useProductsContext } from '../../productsContext';
import './sidebar.css';

type textInputProps = { name: string };

const TextInput = ({ name }: textInputProps) => {
  const { storeProductsFilterValuesHandler } = useProductsContext();

  return (
    <div className="products-text-input">
      <input
        className="products-text-input-item"
        type="text"
        name="name"
        placeholder="Search"
        value={name as string}
        onChange={storeProductsFilterValuesHandler}
      />
    </div>
  );
};

export default TextInput;
