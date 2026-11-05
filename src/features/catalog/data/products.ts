import type { Product } from '../types/product';
import doudouImage from '../../../assets/images/doudou.jpg';
import doudou2Image from '../../../assets/images/doudou2.jpg';
import doudou3Image from '../../../assets/images/doudou3.jpg';
import doudou4Image from '../../../assets/images/doudou4.jpg';
import doudou5Image from '../../../assets/images/doudou5.jpeg';
import doudouImage7 from '../../../assets/images/doudou7.jpeg';

export const products: Product[] = [
  {
    id: 1234,
    name: 'doudou',
    price: 12,
    description: 'Doudou personnalisable pour enfant.',
    featured: true,
    images: [
      {
        url: doudouImage,
        alt: 'photo doudou',
      },
      {
        url: doudouImage7,
        alt: 'doudou vu sous un autre angle',
      },
    ],
  },

  {
    id: 1235,
    name: 'doudou2',
    price: 13,
    description: 'Une description de test.',
    featured: false,
    images: [
      {
        url: doudou2Image,
        alt: 'photo doudou2',
      },
    ],
  },

  {
    id: 1236,
    name: 'doudou3',
    price: 14,
    description: 'Une description de test.',
    featured: true,
    images: [
      {
        url: doudou3Image,
        alt: 'photo doudou3',
      },
    ],
  },

  {
    id: 1237,
    name: 'doudou4',
    price: 15,
    description: 'Une description de test.',
    featured: true,
    images: [
      {
        url: doudou4Image,
        alt: 'photo doudou4',
      },
    ],
  },

  {
    id: 1238,
    name: 'doudou5',
    price: 16,
    description: 'Une description de test.',
    featured: true,
    images: [
      {
        url: doudou5Image,
        alt: 'photo doudou5',
      },
    ],
  },
];
