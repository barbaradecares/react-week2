import React from "react";

const RecipeItem = ({ recipe, recipeOnClick }) => (
  <div className="col-sm-3 mt-4" onClick={() => recipeOnClick(recipe.title)}>
    <div className="card">
      <img className="card-img-top img-fluid" src={recipe.thumbnail} alt="" />
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        <p className="card-text">
          <strong>Ingredients: </strong>
          {recipe.ingredients}
        </p>
      </div>
    </div>
  </div>
);

export default RecipeItem;
