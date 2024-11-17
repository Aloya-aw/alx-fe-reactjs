// RecipeList component
import React, { useEffect} from 'react';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes); // Access filtered recipes
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  useEffect(() => {
    filterRecipes();
  }, [searchTerm]); // Trigger filtering whenever searchTerm changes

  return (
    <div>
      {filteredRecipes.map(recipe => ( // Iterate through filteredRecipes
        <div key={recipe.id}>  {/* Maintain key for each recipe */}
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;