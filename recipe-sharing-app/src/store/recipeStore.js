// src/store/recipeStore.js
import create from 'zustand'

export const useRecipeStore = create((set) => ({
  recipes: [],
  // addRecipe: add a single recipe to the list
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // setRecipes: replace the whole list (useful to initialize)
  setRecipes: (recipes) => set({ recipes }),
}));
