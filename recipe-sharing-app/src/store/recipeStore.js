import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  favourites: [],
  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
  addFavourite: (recipe) => set((state) => ({ favourites: [...state.favourites, recipe] })),
  setFavourites: (favourites) => set({ favourites }),
}));

