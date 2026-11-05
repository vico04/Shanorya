import { Link } from 'react-router-dom';
import { ProductCard } from '../../catalog/components/ProductCard';
import { products } from '../../catalog/data/products';
import './FeaturedProducts.css';

export const FeaturedProducts = () => {
  //Filtrage des produits
  const filteredFeaturedProducts = products.filter(
    (product) => product.featured,
  );

  //Sélection des 3 premiers produits
  const displayedProducts = filteredFeaturedProducts.slice(0, 3);

  return (
    <section className="featured-products">
      <div className="container">
        <h2 className="featured-products__title">Nos Produits</h2>
        <ul className="featured-products__list">
          {displayedProducts.map((product) => (
            <li key={product.id} className="featured-products__card">
              <ProductCard product={product} />
              <Link
                to={`/catalogue/${product.id}`}
                className="featured-products__link"
              >
                Voir le produit
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
