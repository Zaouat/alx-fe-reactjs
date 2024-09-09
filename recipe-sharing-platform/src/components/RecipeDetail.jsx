import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipeData from "../data.json";

const IngredientTable = ({ ingredients }) => (
  <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-[#5B4DE3] text-white">
          <th className="p-3 text-left">Ingredient</th>
          <th className="p-3 text-left">Amount</th>
        </tr>
      </thead>
      <tbody>
        {ingredients.map((ingredient, index) => (
          <tr
            key={index}
            className={
              index % 2 === 0
                ? "bg-gray-100"
                : "bg-white hover:bg-gray-200 transition-colors duration-200"
            }
          >
            <td className="p-3 border">{ingredient.split(",")[0]}</td>
            <td className="p-3 border">{ingredient.split(",")[1] || "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const InstructionStep = ({ step, index }) => (
  <div className="mb-4 flex items-start p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="bg-[#5B4DE3] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
      {index + 1}
    </div>
    <p>{step}</p>
  </div>
);

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
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-96">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between">
          <div className="container mx-auto px-4 py-4">
            <Link
              to="/"
              className="text-white hover:text-gray-200 inline-block bg-[#5B4DE3] bg-opacity-70 hover:bg-opacity-100 py-2 px-4 rounded-full transition-all duration-300"
            >
              &larr; Back to Recipes
            </Link>
          </div>
          <div className="flex-grow flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white text-center px-4 shadow-text">
              {recipe.title}
            </h1>
          </div>
          <div className="h-16"></div> {/* Spacer div to balance the header */}
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden p-6 mb-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-[#5B4DE3]">
            Description
          </h2>
          <p className="text-gray-600 text-lg">{recipe.summary}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-xl overflow-hidden p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-[#5B4DE3]">
              Ingredients
            </h2>
            <IngredientTable ingredients={recipe.ingredients} />
          </div>

          <div className="bg-white shadow-lg rounded-xl overflow-hidden p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-[#5B4DE3]">
              Instructions
            </h2>
            {recipe.instructions.map((step, index) => (
              <InstructionStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecipeDetail;

// Add this CSS to your global styles or within a <style> tag in your component
const styles = `
  .shadow-text {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;
