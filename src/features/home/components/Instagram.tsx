import './Instagram.css';

export const Instagram = () => {
  return (
    <section className="instagram">
      <div className="container">
        <h2 className="instagram__title">Une création vous plaît ?</h2>

        <p className="instagram__text">
          Retrouvez Shanorya sur Instagram pour découvrir les nouveautés et
          passer commande.
        </p>

        <a
          className="instagram__link"
          href="https://www.instagram.com/shanorya.broderie?stkn=Ym1jMmFpZ2VobDk3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir Instagram
        </a>
      </div>
    </section>
  );
};
