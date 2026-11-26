interface Color {
  /** Identifiant stable de la couleur, stocké dans le panier. Ne doit jamais changer */
  id: number;
  /** Nom de la couleur en français */
  name: string;
  /** Valeur hexadécimale de la couleur */
  value: string;
}

export const colors: Color[] = [
  {
    id: 1,
    name: 'Bleu ardoise moyen',
    value: '#7B68EE',
  },
  {
    id: 2,
    name: 'Jaune',
    value: '#FFFF00',
  },
  {
    id: 3,
    name: 'Rouge',
    value: '#FF0000',
  },
];

/** Renvoie le nom de la couleur correspondant à colorId, ou "Couleur non trouvée" si elle n'existe pas */
export const getColorName = (colorId: number): string => {
  const foundColor = colors.find((color) => color.id === colorId);
  if (!foundColor) {
    return 'Couleur non trouvée';
  }

  return foundColor.name;
};
