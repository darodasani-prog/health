import React from 'react';
import { FoodSwap, Herb } from './types';

export const FOOD_SWAPS: FoodSwap[] = [
  {
    id: '1',
    originalName: 'White Garri',
    originalImage: 'https://picsum.photos/seed/garri/400/300',
    originalGI: 85,
    swapName: 'Fonio (Acha)',
    swapImage: 'https://picsum.photos/seed/fonio/400/300',
    swapGI: 45,
    category: 'Swallows',
    whyItWorks: 'Fonio is an ancient grain with a low glycemic index and high fiber content, preventing rapid sugar spikes.',
    recipeLink: '#'
  },
  {
    id: '2',
    originalName: 'Pounded Yam',
    originalImage: 'https://picsum.photos/seed/yam/400/300',
    originalGI: 90,
    swapName: 'Yam Peel Amala (Dudu)',
    swapImage: 'https://picsum.photos/seed/amala/400/300',
    swapGI: 55,
    category: 'Swallows',
    whyItWorks: 'The skin of the yam contains more fiber and resistant starch, which slows down glucose absorption.',
    recipeLink: '#'
  },
  {
    id: '3',
    originalName: 'White Rice',
    originalImage: 'https://picsum.photos/seed/rice/400/300',
    originalGI: 73,
    swapName: 'Ofada Rice',
    swapImage: 'https://picsum.photos/seed/ofada/400/300',
    swapGI: 50,
    category: 'Swallows',
    whyItWorks: 'Ofada rice is unpolished and retains its bran, providing essential nutrients and fiber.',
    recipeLink: '#'
  }
];

export const HERBS: Herb[] = [
  {
    id: '1',
    name: 'Bitter Leaf',
    localNames: { yoruba: 'Ewuro', igbo: 'Onugbu', hausa: 'Shuwaka' },
    scientificName: 'Vernonia amygdalina',
    traditionalUse: 'Used for centuries to treat stomach aches and fever.',
    scientificValidation: 'Studies show it contains sesquiterpene lactones that help regulate blood glucose levels.',
    preparationMethods: ['Tea/Infusion', 'Soup Ingredient'],
    benefits: ['Potent blood sugar regulator', 'Anti-inflammatory'],
    image: 'https://picsum.photos/seed/bitterleaf/400/300'
  },
  {
    id: '2',
    name: 'Scent Leaf',
    localNames: { yoruba: 'Efinrin', igbo: 'Nchanwu', hausa: 'Daidoya' },
    scientificName: 'Ocimum gratissimum',
    traditionalUse: 'Commonly used for digestive issues and respiratory health.',
    scientificValidation: 'Rich in essential oils like eugenol which have antioxidant and anti-diabetic properties.',
    preparationMethods: ['Tea/Infusion', 'Cooking Spice'],
    benefits: ['Rich in antioxidants', 'Supports digestion'],
    image: 'https://picsum.photos/seed/scentleaf/400/300'
  },
  {
    id: '3',
    name: 'Ginger',
    localNames: { yoruba: 'Atale', hausa: 'Jinja' },
    scientificName: 'Zingiber officinale',
    traditionalUse: 'A staple for nausea and general wellness.',
    scientificValidation: 'Gingerols improve insulin sensitivity and glucose uptake in muscle cells.',
    preparationMethods: ['Tea/Infusion', 'Cooking Ingredient', 'Supplement'],
    benefits: ['Anti-inflammatory powerhouse', 'Improves insulin sensitivity'],
    image: 'https://picsum.photos/seed/ginger/400/300'
  }
];
