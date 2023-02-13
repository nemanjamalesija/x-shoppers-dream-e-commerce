const formatPrice = (price: number) => {
  const formater = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formater.format(price / 100);
};

export default formatPrice;
