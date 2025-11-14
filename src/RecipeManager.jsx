import { useState } from "react";

function Recipe({ recipe, onDelete }) {
  return (
    <li>
      <strong>{recipe.cuisine}</strong> - {recipe.difficulty}  
      | Cook Time: {recipe.cookTime}  
      | Servings: {recipe.servings}  
      | Allergens: {recipe.allergens}

      <button onClick={() => onDelete(recipe.id)}>Delete</button>
    </li>
  );
}

export default function RecipeManager() {
  const [cuisine, setCuisine] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [allergens, setAllergens] = useState("");

  const [recipes, setRecipes] = useState([]);

  function addRecipe(e) {
    e.preventDefault();

    const newRecipe = {
      id: Date.now(),
      cuisine,
      difficulty,
      cookTime,
      servings,
      allergens
    };

    setRecipes([...recipes, newRecipe]);

    // clear fields
    setCuisine("");
    setDifficulty("");
    setCookTime("");
    setServings("");
    setAllergens("");
  }

  function deleteRecipe(id) {
    setRecipes(recipes.filter((r) => r.id !== id));
  }

  return (
    <div>
      <h1>Recipe Manager</h1>

      <form onSubmit={addRecipe}>
        <input
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          placeholder="Cuisine"
          required
        />
        <input
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          placeholder="Difficulty"
          required
        />
        <input
          value={cookTime}
          onChange={(e) => setCookTime(e.target.value)}
          placeholder="Cook Time"
          required
        />
        <input
          value={servings}
          onChange={(e) => setServings(e.target.value)}
          placeholder="Servings"
          required
        />
        <input
          value={allergens}
          onChange={(e) => setAllergens(e.target.value)}
          placeholder="Allergens"
        />

        <button type="submit">Add Recipe</button>
      </form>

      <ul>
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} onDelete={deleteRecipe} />
        ))}
      </ul>
    </div>
  );
}
