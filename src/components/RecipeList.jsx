import React from "react";
import useRecipeStore from "./recipeStore";

function RecipeList() {
  const { recipes } = useRecipeStore();

  return (
    <ul>
      {recipes.map((recipe, index) => (
        <li key={index}>{recipe}</li>
      ))}
    </ul>
  );
}

export default RecipeList;

