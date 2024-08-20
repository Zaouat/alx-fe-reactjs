import React, { useState } from "react";
import useRecipeStore from "./recipeStore"; // Import the Zustand store

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check that neither title nor description is empty
    if (!title.trim() || !description.trim()) {
      alert("Both title and description are required.");
      return;
    }

    // Create a new recipe object
    const newRecipe = {
      id: Date.now(), // Simple unique ID using timestamp
      title,
      description,
    };

    // Add the new recipe using Zustand store
    addRecipe(newRecipe);

    // Clear the input fields
    setTitle("");
    setDescription("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <div className="button-container">
          <button type="submit">Add Recipe</button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
