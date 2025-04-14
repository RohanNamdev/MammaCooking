import React from "react";
import CompleteRecipe from "./CompleteRecipe";
import IngredientsList from "./IngredientsList";
import { useState } from "react";

export default function Body() {
  const [ingredients, setIngredients] = useState([]);
  function addIngredients(formData) {
    const ingredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, ingredient]);
  }

  const [recipe, setRecipe] = useState(false);

  function handleRecipe() {
    setRecipe((prev) => !prev);
  }

  return (
    <div className="body">
      <form action={addIngredients} className="form">
        <input
          type="text"
          placeholder="e.g. potato"
          className="search-bar"
          name="ingredient"
          aria-label="add ingredient"
        />
        <button>+ Add Ingredients</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          handleRecipe={handleRecipe}
        />
      )}

      {recipe && <CompleteRecipe />}
    </div>
  );
}
