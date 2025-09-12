import React, { useState } from "react";
import useRecipeStore from "./recipeStore";

function AddRecipeForm() {
  const { addRecipe } = useRecipeStore();
  const [recipe, setRecipe] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipe.trim()) {
      addRecipe(recipe);
      setRecipe("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)}
        placeholder="Enter a recipe"
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
