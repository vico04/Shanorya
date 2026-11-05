import { colors } from '../data/colors';

//Prop pour la personnalisation de couleur et texte
interface ProductCustomizationProps {
  newText: string;
  selectedColor: string;
  quantity: number;
  onColorChange: (value: string) => void;
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
                value={color.value}
                checked={selectedColor === color.value}
                onChange={() => onColorChange(color.value)}
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
        onChange={(e) => onQuantityChange(parseInt(e.target.value, 10))}
      />
    </>
  );
};
