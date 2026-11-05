import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HomePage } from './features/home/HomePage';
import { Footer } from './shared/Footer';
import { CataloguePage } from './features/catalog/CataloguePage';
import { ProductDetailPage } from './features/catalog/components/ProductDetailPage';
import type { CartItem } from './features/catalog/types/cartItem';
import { CartPage } from './features/catalog/components/CartPage';
import { Header } from './shared/Header';

const App = () => {
  //Ajout du state cartItems dans le composant parent
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedStorage = localStorage.getItem('cartItems');
    return savedStorage ? JSON.parse(savedStorage) : [];
  });

  const addToCart = (cartItem: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) =>
          item.productId === cartItem.productId &&
          item.text === cartItem.text &&
          item.color === cartItem.color,
      );

      if (existingItem) {
        return prev.map((item) => {
          if (item.id === existingItem.id) {
            return {
              ...item,

              quantity: item.quantity + cartItem.quantity,
            };
          } else {
            return item;
          }
        });
      } else {
        return [...prev, cartItem];
      }
    });
  };

  // const existingItem = prev.find(
  //   (item) =>
  //     item.productId === cartItem.productId &&
  //     item.text === cartItem.text &&
  //     item.color === cartItem.color,
  // );

  // prev.map((item) => {
  //   if (item.id === existingItem.id) {
  //     return { ...item, quantity: item.quantity + cartItem.quantity };
  //   } else {
  //     return item;
  //   }

  const deleteCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((cartItem) => cartItem.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CataloguePage" element={<CataloguePage />} />
        <Route
          path="/catalogue/:id"
          element={<ProductDetailPage onAddToCart={addToCart} />}
        />
        <Route
          path="/panier"
          element={
            <CartPage cartItems={cartItems} deleteCartItem={deleteCartItem} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
