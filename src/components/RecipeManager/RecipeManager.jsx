import React, { useState } from "react";
import Recipe from "./Recipe";
import "./RecipeManager.css"; // Optional CSS for styling

function RecipeManager() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    cuisine: "",
    difficulty: "",
    cookTime: "",
    servings: "",
    allergens: "",
  });

  // Handle input changes dynamically
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewRecipe((prev) => ({ ...prev, [name]: value }));
  };

  // Add a new recipe
  const addRecipe = () => {
    const { cuisine, difficulty, cookTime, servings } = newRecipe;
    if (cuisine && difficulty && cookTime && servings) {
      setRecipes((prev) => [
        ...prev,
        { ...newRecipe, id: Date.now() } // unique ID for deletion
      ]);
      setNewRecipe({
        cuisine: "",
        difficulty: "",
        cookTime: "",
        servings: "",
        allergens: "",
      });
    } else {
      alert("Please fill in all required fields!");
    }
  };

  // Delete a recipe by id
  const deleteRecipe = (id) => {
    setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
  };

  return (
    <div className="recipe-manager">
      <h2>Recipe Manager</h2>

      <div className="form">
        <input
          type="text"
          name="cuisine"
          placeholder="Cuisine (Italian, Indian...)"
          value={newRecipe.cuisine}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="difficulty"
          placeholder="Difficulty (Easy, Medium, Hard)"
          value={newRecipe.difficulty}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="cookTime"
          placeholder="Cook Time (mins)"
          value={newRecipe.cookTime}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="servings"
          placeholder="Servings"
          value={newRecipe.servings}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="allergens"
          placeholder="Allergens (Gluten, Nuts...)"
          value={newRecipe.allergens}
          onChange={handleInputChange}
        />
        <button onClick={addRecipe}>Add Recipe</button>
      </div>

      <ul>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            recipe={recipe}
            onDelete={() => deleteRecipe(recipe.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default RecipeManager;
