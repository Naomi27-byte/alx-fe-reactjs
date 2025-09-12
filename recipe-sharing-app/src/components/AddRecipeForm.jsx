// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // tiny check: don't add empty things
    if (!title.trim() || !description.trim()) return;

    addRecipe({
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
    });

    // clear the form
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{marginBottom: '16px'}}>
      <div style={{marginBottom: '8px'}}>
        <label>
          <div style={{fontSize: '14px'}}>Title</div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Recipe title"
            style={{width: '100%', padding: '6px'}}
          />
        </label>
      </div>

      <div style={{marginBottom: '8px'}}>
        <label>
          <div style={{fontSize: '14px'}}>Description</div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Recipe description"
            style={{width: '100%', padding: '6px'}}
            rows={4}
          />
        </label>
      </div>

      <button type="submit" style={{padding: '8px 12px'}}>Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
