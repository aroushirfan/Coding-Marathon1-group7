import React from "react";

function Recipe({ recipe, onDelete }) {
  return (
    <li>
      <strong>Cuisine:</strong> {recipe.cuisine},{" "}
      <strong>Difficulty:</strong> {recipe.difficulty},{" "}
      <strong>Cook Time:</strong> {recipe.cookTime},{" "}
      <strong>Servings:</strong> {recipe.servings},{" "}
      <strong>Allergens:</strong> {recipe.allergens}{" "}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default Recipe;
