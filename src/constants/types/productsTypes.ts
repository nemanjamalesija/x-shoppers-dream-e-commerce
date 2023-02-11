export type product = {
  id: string;
  category: string;
  colors: string[];
  company: string;
  description: string;
  image: string;
  name: string;
  price: number;
  shipping: boolean;
};

export type filters = {
  [key: string]: string | string[] | number | boolean;
};

export type filtersPayload = {
  [key: string]: string | number;
};

export type stateProducts = {
  loading: boolean;
  products: product[];
  filteredProducts: product[];
  sort: string;
  filters: filters;
  storeProductsFilterValuesHandler(e: any): void;
};
