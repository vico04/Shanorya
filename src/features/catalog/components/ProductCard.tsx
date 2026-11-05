import type { Product } from '../types/product';
import './ProductCard.css';

//Déclaration de la props ProductCard
type ProductCardProps = {
  product: Product;
};

//Déclaration du composant
export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img
        src={product.images[0].url}
        alt={product.images[0].alt}
        className="product-card__image"
      />
      <h3 className="product-card__name">{product.name}</h3>
      <p className="product-card__price">{product.price} €</p>
    </div>
  );
};
