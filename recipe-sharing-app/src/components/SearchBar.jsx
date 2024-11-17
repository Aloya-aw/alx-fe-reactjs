import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const setIngredientFilter = useRecipeStore(state => state.setIngredientFilter);
  const setCookingTimeFilter = useRecipeStore(state => state.setCookingTimeFilter);

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by ingredient..."
        onChange={(e) => setIngredientFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max cooking time (minutes)"
        onChange={(e) => setCookingTimeFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;