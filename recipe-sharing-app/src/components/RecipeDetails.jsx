import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';

function RecipeDetails() {
  const { id } = useParams();
  const recipes = useRecipeStore(state => state.recipes);
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      {/* ... other recipe details */}
    </div>
  );
}

export default RecipeDetails;