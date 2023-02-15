import React from 'react';
import Creeds from '../components/Home/Creeds';
import Featuredin from '../components/Home/FeaturedIn';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import Hero from '../components/Home/Hero';
import Slider from '../components/Home/Slider';

const Home = () => {
  return (
    <>
      <Hero />
      <Featuredin />
      <FeaturedProducts />
      <Creeds />
      <Slider />
    </>
  );
};

export default Home;
