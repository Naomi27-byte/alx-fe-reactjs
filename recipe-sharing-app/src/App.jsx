<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
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
>>>>>>> 8e91708d3ea4f63651c320c7480c87d99a361005
