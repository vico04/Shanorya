import { useState } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../assets/images/logo-shanorya.png';
import './Header.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <img src={headerLogo} alt="Shanorya" className="header__logo" />
      <button
        type="button"
        className="header__button"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-expanded={isMenuOpen}
        aria-controls="header-menu"
      >
        ☰
      </button>
      {isMenuOpen && (
        <button
          type="button"
          className="header__overlay"
          onClick={closeMenu}
          aria-label="fermer le menu"
        ></button>
      )}
      <nav
        id="header-menu"
        className={`header__menu ${isMenuOpen ? 'header__menu--open' : ''}`}
      >
        <Link to="/CataloguePage" onClick={closeMenu}>
          Catalogue
        </Link>
        <Link to="/" onClick={closeMenu}>
          Accueil
        </Link>
        <Link to="/panier" onClick={closeMenu}>
          Panier
        </Link>
      </nav>
    </header>
  );
};
