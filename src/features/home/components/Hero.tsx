import { Link } from 'react-router-dom';
import heroImage from '../../../assets/images/hero-shanorya.jpeg';
import logo from '../../../assets/images/logo-shanorya.png';
import './Hero.css';

//Composition du Hero
export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>
          <img src={logo} alt="Shanorya" className="hero__logo" />
        </h1>
        <p className="hero__text">
          Des créations brodées personnalisées pour enfants et bébés.
        </p>
        <Link to="/CataloguePage" className="hero__link">
          Découvrir le catalogue
        </Link>
      </div>
      <img
        src={heroImage}
        alt="Sac et doudou personnalisés avec une broderie"
        className="hero__image"
      />
    </section>
  );
};
