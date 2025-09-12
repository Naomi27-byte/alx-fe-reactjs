// src/components/RecipeList.jsx
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (!recipes || recipes.length === 0) {
    return <div>No recipes yet. Add your first recipe!</div>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{border: '1px solid #ddd', padding: '8px', marginBottom: '8px'}}>
          <h3 style={{margin: '0 0 6px 0'}}>{recipe.title}</h3>
          <p style={{margin: 0}}>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
