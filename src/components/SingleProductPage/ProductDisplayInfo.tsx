import React from 'react';

type ProductDisplayInfoProps = { stock: number; company: string; SKU: string };

const ProductDisplayInfo = ({
  stock,
  company,
  SKU,
}: ProductDisplayInfoProps) => {
  return <div>ProductDisplayInfo</div>;
};

export default ProductDisplayInfo;
