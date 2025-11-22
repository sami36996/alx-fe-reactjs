import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const FavouritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);

  if (favorites.length === 0) return <p>No favourites yet.</p>;

  return (
    <ul>
      {favorites.map((recipe, index) => (
        <li key={index}>{recipe.name}</li>
      ))}
    </ul>
  );
};

export default FavouritesList;
