import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useEffect, useState } from 'react';
import { ProductCustomization } from './ProductCustomization';
import type { CartItem } from '../types/cartItem';

interface ProductDetailPageProps {
  onAddToCart: (cartItem: CartItem) => void;
}

export const ProductDetailPage = ({ onAddToCart }: ProductDetailPageProps) => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState('');
  const [newText, setNewText] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (success !== '') {
      timer = setTimeout(() => {
        setSuccess('');
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [success]);

  if (!id) {
    return null;
  }

  const idParsed = parseInt(id, 10);

  const detail = products.find((product) => product.id === idParsed);

  if (!detail) {
    return 'Page introuvable';
  }

  const handleAddCart = () => {
    setSuccess('');
    setError('');
    if (newText.trim() === '' || selectedColor === '') {
      setError('Veuillez remplir les champs requis');
      return;
    }

    const cartItem: CartItem = {
      id: crypto.randomUUID(),
      productId: detail.id,
      name: detail.name,
      price: detail.price,
      text: newText,
      color: selectedColor,
      quantity: quantity,
    };

    onAddToCart(cartItem);
    setSuccess('Votre produit a été ajouté au panier');
  };

  const handleTextChange = (value: string) => {
    setNewText(value);

    if (value.trim() !== '' && selectedColor !== '') {
      setError('');
    }
  };

  const handleColorChange = (value: string) => {
    setSelectedColor(value);

    if (newText.trim() !== '' && value !== '') {
      setError('');
    }
  };

  return (
    <>
      <Link to={'/CataloguePage'}>← Retour au catalogue</Link>

      <h1>{detail.name}</h1>

      <p>{detail.price} €</p>

      <ul>
        {detail.images.map((image, index) => (
          <li key={index}>
            <img src={image.url} alt={image.alt} />
          </li>
        ))}
      </ul>

      <p>{detail.description}</p>

      <ProductCustomization
        onColorChange={handleColorChange}
        onTextChange={handleTextChange}
        onQuantityChange={setQuantity}
        newText={newText}
        selectedColor={selectedColor}
        quantity={quantity}
      />

      <button type="button" onClick={handleAddCart}>
        Ajouter
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </>
  );
};
