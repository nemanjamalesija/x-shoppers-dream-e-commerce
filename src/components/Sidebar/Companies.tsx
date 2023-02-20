import { useProductsContext } from '../../productsContext';
import './sidebar.css';

type companiesProps = { currentCompany: string; companies: string[] };

const Companies = ({ currentCompany, companies }: companiesProps) => {
  const {
    state: { storeProductsFilterValuesHandler },
  } = useProductsContext();
  return (
    <div className="products-companies">
      <h5 className="heading-fifth sidebar-filter-title">Company</h5>
      <select
        name="currentCompany"
        value={currentCompany}
        onChange={storeProductsFilterValuesHandler}
      >
        {companies.map((item, i) => (
          <option key={i} className="product-company-item" value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Companies;
