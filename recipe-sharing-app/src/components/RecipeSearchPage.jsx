import React from 'react';
import useRecipeStore from './recipeStore';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList'


const Filters = () => {
  const setFilterCriteria = useRecipeStore(state => state.setFilterCriteria);

  return (
    <div>
      <select onChange={(e) => setFilterCriteria('cookingTime', e.target.value)}>
        <option value="">All</option>
        <option value="short">Short (under 30 mins)</option>
        <option value="medium">Medium (30-60 mins)</option>
        <option value="long">Long (over 60 mins)</option>
      </select>
      {/* Add more filters as needed */}
    </div>
  );
};

const RecipeSearchPage = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>Search Recipes</h1>
      <SearchBar />
      <Filters /> {/* Add the filters component */}
      <RecipeList />
    </div>
  );
};

export default RecipeSearchPage;
