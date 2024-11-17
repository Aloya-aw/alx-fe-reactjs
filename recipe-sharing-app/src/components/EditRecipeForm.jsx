import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';

function EditRecipeForm() {
  const { id } = useParams();
  const recipes = useRecipeStore(state => state.recipes);
  const recipe = recipes.find(r => r.id === id);
  const [updatedRecipe, setUpdatedRecipe] = useState(recipe);

  const handleInputChange = (event) => {
    setUpdatedRecipe({ ...updatedRecipe, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update the recipe in your store
    useRecipeStore(state => state.updateRecipe(updatedRecipe));
    // Redirect or show a success message
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... form fields for editing recipe details */}
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditRecipeForm;