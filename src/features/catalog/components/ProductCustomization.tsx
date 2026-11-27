import { colors } from '../data/colors';

//Prop pour la personnalisation de couleur et texte
interface ProductCustomizationProps {
  newText: string;
  selectedColor: number | null;
  quantity: number;
  onColorChange: (value: number) => void;
  onTextChange: (value: string) => void;
  onQuantityChange: (value: number) => void;
}

export const ProductCustomization = ({
  onColorChange,
  onTextChange,
  onQuantityChange,
  newText,
  selectedColor,
  quantity,
}: ProductCustomizationProps) => {
  return (
    <>
      <label htmlFor="personalization">Prénom/texte</label>
      <input
        type="text"
        id="personalization"
        value={newText}
        onChange={(e) => onTextChange(e.target.value)}
        required
      />
      <ul>
        {colors.map((color, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name="color"
                value={color.id}
                checked={selectedColor === color.id}
                onChange={() => onColorChange(color.id)}
              />
              {color.name}
            </label>
          </li>
        ))}
      </ul>

      <label htmlFor="personalizationQuantity">Quantité</label>
      <input
        type="number"
        id="personalizationQuantity"
        value={quantity}
        min={1}
        onChange={(e) => onQuantityChange(parseInt(e.target.value, 10))}
      />
    </>
  );
};
