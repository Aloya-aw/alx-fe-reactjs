import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming routing is set up
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm'; // Import your EditRecipeForm component
import DeleteRecipeButton from './DeleteRecipeButton'; // Import your DeleteRecipeButton component

const RecipeDetails = () => {
  const { recipeId } = useParams(); // Extract recipe ID from URL parameters

  const recipes = useRecipeStore(state => state.recipes); // Access recipes from store
  const recipe = recipes.find(recipe => recipe.id === recipeId); // Find recipe by ID

  if (!recipe) {
    return <div>Recipe not found</div>; // Handle recipe not found scenario
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Render Edit and Delete components with correct props */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipeId} />
    </div>
  );
};

export default RecipeDetails;