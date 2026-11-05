//Déclaration des types du produit
export type Image = {
  url: string;
  alt: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  featured: boolean;
  images: Image[];
};
