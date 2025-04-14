export default function IngredientsList(props) {
  return (
    <>
      <div className="ingredients">
        <h2>Ingredients we have:</h2>
        <ul className="ingredients-list">
          {props.ingredients.map((ingredient, index) => (
            <li key={index} className="ingredient-item">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      {props.ingredients.length > 3 && (
        <div className="box">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from the list of your ingredients.</p>
          </div>
          <button onClick={props.handleRecipe}>Get a recipe</button>
        </div>
      )}
    </>
  );
}
