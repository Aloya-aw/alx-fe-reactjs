import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '', // Added search term state
  ingredientFilter: '',
  cookingTimeFilter: '',
  favorites: [], // Added favorites array
  recommendations: [],
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
  setRecipes: (recipes) => set({ recipes }),
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe => (recipe.id === updatedRecipe.id ? updatedRecipe : recipe)),
  })),
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
  })),
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;