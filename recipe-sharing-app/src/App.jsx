import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import RecipeSearchPage from './components/RecipeSearchPage'; 

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />
        <Routes>
          {/* Make sure all Route components are inside the Routes component */}
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="/search" element={<RecipeSearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
