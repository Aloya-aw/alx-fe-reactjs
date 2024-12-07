import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(`../data.json`); 
      const data = await response.json();
      const selectedRecipe = data.find(recipe => recipe.id === parseInt(id));
      setRecipe(selectedRecipe);
    };

    fetchRecipe();
  }, [id]);
  return (
    <div className="container mx-auto px-4 py-8 shadow-md">
      {recipe ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4" />
          <p className="text-gray-700">{recipe.summary}</p>

          <h2 className="text-2xl font-bold mt-4">Ingredients</h2>
          <ul className="list-none p-0">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="list-disc pl-4">{ingredient}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mt-4">Instructions</h2>
          <ol className="list-none p-0">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="list-decimal pl-4">{instruction}</li>
            ))}
          </ol>
        </div>
      ) : (
        <p>Loading recipe...</p>
      )}
    </div>
  );
};
export default RecipeDetail;