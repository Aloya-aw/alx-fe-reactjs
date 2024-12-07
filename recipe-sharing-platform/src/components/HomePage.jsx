import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link component

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch recipe data on component mount
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('../data.json'); // Replace with your data.json path
      const data = await response.json();
      setRecipes(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Explore Delicious Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-transform">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <Link to={`/recipe/${recipe.id}`}> {/* Use Link component for navigation */}
                <h2 className="text-lg font-bold mb-2">{recipe.title}</h2>
              </Link>
              <p className="text-gray-700">{recipe.summary}</p>
              <a href="#" className="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;