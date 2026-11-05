import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { About } from './components/About';
import { Instagram } from './components/Instagram';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <About />
      <Instagram />
    </>
  );
};
