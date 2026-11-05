import { useState } from 'react';
import type { CartItem } from '../../catalog/types/cartItem';

interface OrderSummaryProps {
  items: CartItem[];
  total: number;
}

export const OrderSummary = ({ items, total }: OrderSummaryProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const [copyError, setCopyError] = useState('');

  const messageItems = items.map((item) => {
    const name = item.name;
    const text = item.text;
    const color = item.color;
    const quantity = item.quantity;
    const subTotal = item.price * item.quantity;
    const message = `Produit : ${name}\nPrénom : ${text}\nCouleur : ${color}\nQuantité : ${quantity}\nSous-total : ${subTotal} €`;

    return message;
  });

  const message = messageItems.join('\n\n');

  const finalMessage = `${message}\n\nTotal estimé : ${total} €`;

  //Fonction pour copier le message du textarea
  const handleCopy = async () => {
    setCopyError('');
    try {
      await navigator.clipboard.writeText(finalMessage);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch {
      setCopyError(
        'Impossible de copier le message. Vous pouvez le sélectionner manuellement.',
      );
    }
  };

  return (
    <>
      <h2>Préparer ma commande</h2>

      <textarea value={finalMessage} readOnly rows={10} cols={40} />

      <button type="button" onClick={handleCopy}>
        {isCopied ? 'Copié ! ✓' : 'Copier'}
      </button>
      {copyError && <p>{copyError}</p>}

      <a
        href="https://www.instagram.com/shanorya.broderie?stkn=Ym1jMmFpZ2VobDk3"
        target="_blank"
        rel="noopener noreferrer"
      >
        Continuer sur Instagram
      </a>
    </>
  );
};
