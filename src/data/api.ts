import type { Recipe, Recipes } from "../types";

// Get all recipes
export async function getAllRecipes(page: number, mealType?: string) {
  const offset = 10;
  try {
    let response;
    if (mealType && typeof mealType !== "undefined" && mealType !== "all") {
      response = await fetch(
        `${import.meta.env.VITE_APP_API_ENDPOINT!}/meal-type/${mealType}?limit=10&skip=${(page - 1) * offset}`,
      );
    } else {
      response = await fetch(
        `${import.meta.env.VITE_APP_API_ENDPOINT!}?limit=10&skip=${(page - 1) * offset}`,
      );
    }

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return (await response.json()) as Recipes;
  } catch (error) {
    throw new Error("Failed to fetch recipes");
  }
}

// Get recipes by cuisine
export async function getRecipesByCuisine(cuisine: string) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_API_ENDPOINT!}/tag/${cuisine}`,
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return (await response.json()) as Recipes;
  } catch (error) {
    throw new Error("Failed to fetch recipes by cuisine");
  }
}

// Get recipe by ID
export async function getRecipeById(id: number) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_API_ENDPOINT!}/id/${id}`,
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return (await response.json()) as Recipe;
  } catch (error) {
    throw new Error("Failed to fetch recipe by ID");
  }
}

// Get all recipe tags/cuisines
export async function getAllCuisines() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_API_ENDPOINT!}/tags`,
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return (await response.json()) as string[];
  } catch (error) {
    throw new Error("Failed to fetch cuisines");
  }
}

// Search recipe
export async function searchRecipes(query: string) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_API_ENDPOINT!}/search?q=${encodeURIComponent(query)}`,
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return (await response.json()) as Recipes;
  } catch (error) {
    throw new Error("Failed to search recipes");
  }
}
