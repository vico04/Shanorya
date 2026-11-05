import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div>
          <h2 className="footer__title">Suivez-nous</h2>
          <ul className="footer__list">
            <li>
              <a
                href="https://www.instagram.com/shanorya.broderie?stkn=Ym1jMmFpZ2VobDk3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="footer__title">Informations</h2>
          <ul className="footer__list">
            <li>
              <Link to="">Mentions Légales</Link>
            </li>
            <li>
              <Link to="">Politique de confidentialité</Link>
            </li>
          </ul>
        </div>
      </div>

      <p>© 2026 Shanorya</p>
    </footer>
  );
};
