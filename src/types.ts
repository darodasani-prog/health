export interface FoodSwap {
  id: string;
  originalName: string;
  originalImage: string;
  originalGI: number;
  swapName: string;
  swapImage: string;
  swapGI: number;
  category: 'Swallows' | 'Soups' | 'Proteins' | 'Snacks' | 'Drinks';
  whyItWorks: string;
  recipeLink?: string;
}

export interface Herb {
  id: string;
  name: string;
  localNames: {
    yoruba?: string;
    igbo?: string;
    hausa?: string;
  };
  scientificName: string;
  traditionalUse: string;
  scientificValidation: string;
  preparationMethods: string[];
  benefits: string[];
  image: string;
}

export interface GlucoseReading {
  id: string;
  userId: string;
  value: number;
  timestamp: Date;
  mealType?: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
  notes?: string;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  diabetesType: 'Type 1' | 'Type 2' | 'Pre-diabetic';
  targetRange: {
    min: number;
    max: number;
  };
}
