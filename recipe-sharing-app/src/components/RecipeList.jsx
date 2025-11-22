import { Link } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";

export default function RecipeList() {
  const { filteredRecipes } = useRecipeStore();

  if (!filteredRecipes.length)
    return <p>No recipes found.</p>;

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>
            <h2>{recipe.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

