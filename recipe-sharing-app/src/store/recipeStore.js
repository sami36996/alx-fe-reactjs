import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],           // <--- add this
  recommendations: [],     // <--- add this

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  setRecipes: (recipes) => set({ recipes }),

  addFavorite: (recipe) =>
    set((state) => ({ favorites: [...state.favorites, recipe] })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((r) => r.id !== recipeId),
    })),

  setRecommendations: (recommendations) => set({ recommendations }),
}));

