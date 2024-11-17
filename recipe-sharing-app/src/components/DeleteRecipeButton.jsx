import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';

function DeleteRecipeButton() {
  const { id } = useParams();
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(id);
    // Redirect or show a confirmation message
  };

  return (
    <button onClick={handleDelete}>Delete Recipe</button>
  );
}

export default DeleteRecipeButton;