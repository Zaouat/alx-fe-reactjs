import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
    instructions: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: e.target.value, // Explicitly using e.target.value here
    }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.title.trim()) tempErrors.title = "Title is required";
    if (!formData.ingredients.trim())
      tempErrors.ingredients = "Ingredients are required";
    if (
      formData.ingredients.split("\n").filter((item) => item.trim()).length < 2
    ) {
      tempErrors.ingredients = "Please enter at least two ingredients";
    }
    if (!formData.steps.trim()) tempErrors.steps = "Steps are required";
    if (!formData.instructions.trim())
      tempErrors.instructions = "Instructions are required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Recipe submitted successfully!");
      setFormData({ title: "", ingredients: "", steps: "", instructions: "" });
    } else {
      console.log("Form has errors, please correct them");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="ingredients"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="5"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter ingredients, one per line"
          ></textarea>
          {errors.ingredients && (
            <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="steps"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            rows="5"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe steps"
          ></textarea>
          {errors.steps && (
            <p className="mt-1 text-sm text-red-600">{errors.steps}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="instructions"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Additional Instructions
          </label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            rows="5"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter additional cooking instructions"
          ></textarea>
          {errors.instructions && (
            <p className="mt-1 text-sm text-red-600">{errors.instructions}</p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
