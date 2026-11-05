import { Link } from 'react-router-dom';
import type { Product } from '../types/product';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`/catalogue/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
