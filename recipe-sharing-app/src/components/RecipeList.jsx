import React from 'react';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleDelete = (id) => {
    deleteRecipe(id);
  };

  const handleEdit = (recipe) => {
    const updatedTitle = prompt("Enter new title", recipe.title);
    const updatedDescription = prompt("Enter new description", recipe.description);
    if (updatedTitle && updatedDescription) {
      updateRecipe({ ...recipe, title: updatedTitle, description: updatedDescription });
    }
  };

  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes available.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '10px' }}>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <button onClick={() => handleEdit(recipe)}>Edit</button>
            <button onClick={() => handleDelete(recipe.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
