import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    ingredients: "",
    instructions: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.title.trim()) tempErrors.title = "Title is required";
    if (!formData.summary.trim())
      tempErrors.summary = "Description is required";
    if (!formData.ingredients.trim())
      tempErrors.ingredients = "Ingredients are required";
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
      setFormData({
        title: "",
        summary: "",
        ingredients: "",
        instructions: "",
      });
    } else {
      console.log("Form has errors, please correct them");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-64 ">
        <div className="absolute inset-0   flex flex-col justify-between">
          <div className="container mx-auto px-4 py-4">
            <Link
              to="/"
              className="text-white hover:text-gray-200 inline-block bg-[#5B4DE3] bg-opacity-70 hover:bg-opacity-100 py-2 px-4 rounded-full transition-all duration-300"
            >
              &larr; Back to Home
            </Link>
          </div>
          <div className="flex-grow flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white text-center px-4 shadow-text text-violet-700">
              Add New Recipe
            </h1>
          </div>
          <div className="h-16"></div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white shadow-lg rounded-xl overflow-hidden p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-[#5B4DE3]">
              Recipe Details
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-lg font-medium mb-2 text-gray-700"
                >
                  Recipe Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter recipe title"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="summary"
                  className="block text-lg font-medium mb-2 text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="summary"
                  name="summary"
                  value={formData.summary}
                  onChange={handleChange}
                  rows="3"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter recipe description"
                ></textarea>
                {errors.summary && (
                  <p className="text-red-500 text-sm mt-1">{errors.summary}</p>
                )}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-[#5B4DE3]">
                Ingredients
              </h2>
              <textarea
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                rows="10"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter ingredients, one per line (e.g., Ingredient, Amount)"
              ></textarea>
              {errors.ingredients && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.ingredients}
                </p>
              )}
            </div>

            <div className="bg-white shadow-lg rounded-xl overflow-hidden p-6 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-[#5B4DE3]">
                Instructions
              </h2>
              <textarea
                id="instructions"
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                rows="10"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter recipe instructions, one step per line"
              ></textarea>
              {errors.instructions && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.instructions}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#5B4DE3] hover:bg-[#4B3ED3] text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
            >
              Add Recipe
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddRecipeForm;

// Add this CSS to your global styles or within a <style> tag in your component
const styles = `
  .shadow-text {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;
