import React from 'react';
import Creeds from '../components/Home/Creeds';
import Featuredin from '../components/Home/FeaturedIn';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import Hero from '../components/Home/Hero';
import Slider from '../components/Home/Slider';
import Tabs from '../components/Home/Tabs';
import Form from '../components/Home/Form';
const Home = () => {
  return (
    <>
      <Hero />
      <Featuredin />
      <FeaturedProducts />
      <Creeds />
      <Tabs />
      <Slider />
      <Form />
    </>
  );
};

export default Home;
