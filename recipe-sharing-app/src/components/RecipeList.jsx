import React from "react";
import useRecipeStore from "./recipeStore";
import "../App.css";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleDelete = (id) => {
    deleteRecipe(id);
  };

  const handleEdit = (recipe) => {
    const updatedTitle = prompt("Enter new title", recipe.title);
    const updatedDescription = prompt(
      "Enter new description",
      recipe.description
    );
    if (updatedTitle && updatedDescription) {
      updateRecipe({
        ...recipe,
        title: updatedTitle,
        description: updatedDescription,
      });
    }
  };

  return (
    <div className="recipe-grid">
      {recipes.length === 0 ? (
        <p>No recipes available.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            {/* Link to a detailed view or edit page */}
            <Link to={`/edit/${recipe.id}`}>
              <button className="edit_btn">Edit</button>
            </Link>
            <button
              className="delete_btn"
              onClick={() => handleDelete(recipe.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
