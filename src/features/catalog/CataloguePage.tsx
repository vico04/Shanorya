import { ProductList } from './components/ProductList';
import { products } from './data/products';

export const CataloguePage = () => {
  return (
    <main>
      <h1>Nos créations</h1>

      <ProductList products={products} />
    </main>
  );
};
