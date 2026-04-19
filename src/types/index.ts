export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: "Medium" | "Hard" | "Easy";
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];na
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[] | string;
}

export interface Recipes {
  recipes: Recipe[];
  skip: number;
  total: number;
  limit: number;
}
