import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '', // Added search term state
  ingredientFilter: '',
  cookingTimeFilter: '',
  setSearchTerm: (term) => set({ searchTerm: term }), // Action to update search term
  setIngredientFilter: (ingredient) => set({ ingredientFilter: ingredient }),
  setCookingTimeFilter: (time) => set({ cookingTimeFilter: time }),
  filteredRecipes: [], // Added filteredRecipes array
  filterRecipes: () => set(state => ({ // Action to compute filtered recipes
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) &&
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(state.ingredientFilter.toLowerCase())) &&
      recipe.cookingTime <= state.cookingTimeFilter
    )
  })),
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe => (recipe.id === updatedRecipe.id ? updatedRecipe : recipe)),
  })),
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
  })),
}));

export default useRecipeStore;