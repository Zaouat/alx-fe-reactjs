import React, { useState, useEffect, forwardRef } from "react";
import recipeData from "../data.json";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa"; // Make sure to install react-icons package

const RecipeCard = ({ recipe }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative">
      <Link to={`/recipe/${recipe.id}`} className="block">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
          <p className="text-gray-600">{recipe.summary}</p>
          <span className="mt-4 inline-block bg-[#5B4DE3] hover:bg-[#4A3EBF] text-white font-bold py-2 px-4 rounded text-xs transition-colors duration-300">
            View Recipe
          </span>
        </div>
      </Link>
      <button
        onClick={handleLike}
        className="absolute top-2 right-2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <FaHeart
          className={`text-2xl ${isLiked ? "text-red-500" : "text-gray-400"}`}
        />
      </button>
    </div>
  );
};

const HomePage = forwardRef((props, ref) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div ref={ref} className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Explore Recipes</h2>
        <p className="text-gray-600 mt-2 mb-6">
          Discover a world of flavors and culinary inspiration!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
});

export default HomePage;
