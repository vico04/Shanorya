import { OrderSummary } from '../../order/components/OrderSummary';
import type { CartItem } from '../types/cartItem';

interface CartPageProps {
  cartItems: CartItem[];
  deleteCartItem: (id: string) => void;
}

export const CartPage = ({ cartItems, deleteCartItem }: CartPageProps) => {
  //Total des achats
  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.price * cartItem.quantity;
  }, 0);

  return (
    <>
      <h1>Votre panier</h1>

      {cartItems.length === 0 ? (
        <p>Votre panier est vide </p>
      ) : (
        <>
          <ul>
            {cartItems.map((cartItem) => (
              <li key={cartItem.id}>
                <p>{cartItem.name}</p>
                <p>{cartItem.price} €</p>
                <p>Personnalisation : {cartItem.text}</p>
                <p>Couleur : {cartItem.color}</p>
                <p>Quantité : {cartItem.quantity}</p>
                <p>Sous-total : {cartItem.price * cartItem.quantity} €</p>

                <button
                  type="button"
                  onClick={() => deleteCartItem(cartItem.id)}
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>

          <h3>Total : {total} €</h3>

          <OrderSummary items={cartItems} total={total} />
        </>
      )}
    </>
  );
};
