import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipeData from "../data.json";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchedRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(fetchedRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/"
        className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
      >
        &larr; Back to Recipes
      </Link>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
          <ul className="list-disc pl-5 mb-6">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-1">
                {ingredient}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
          <ol className="list-decimal pl-5">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="mb-2">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
