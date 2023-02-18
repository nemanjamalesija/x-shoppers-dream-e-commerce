import Creeds from '../components/Home/Creeds';

import FeaturedProducts from '../components/Home/FeaturedProducts';
import Hero from '../components/Home/Hero';
import Slider from '../components/Home/Slider';
import Tabs from '../components/Home/Tabs';

const Home = () => {
  return (
    <>
      <Hero />

      <FeaturedProducts />
      <Creeds />
      <Tabs />
      <Slider />
    </>
  );
};

export default Home;
