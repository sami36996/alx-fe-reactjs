import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecommendationList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) return <p>No recommendations yet.</p>;

  // For simplicity, show first 3 recipes as “recommended”
  const recommended = recipes.slice(0, 3);

  return (
    <ul>
      {recommended.map((recipe, index) => (
        <li key={index}>{recipe.name}</li>
      ))}
    </ul>
  );
};

export default RecommendationList;
