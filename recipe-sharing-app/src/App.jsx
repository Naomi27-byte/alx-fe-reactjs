// src/App.jsx
import React, { useEffect } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { useRecipeStore } from './store/recipeStore';

function App() {
  // optional: initialize with one sample recipe so your page isn't empty the first time
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    setRecipes([
      { id: 'starter-1', title: 'Pancakes', description: 'Mix flour, eggs, milk. Fry in a pan.' }
    ]);
  }, [setRecipes]);

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', padding: '0 16px', fontFamily: 'sans-serif' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <hr />
      <RecipeList />
    </div>
  );
}

export default App;
