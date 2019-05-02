import React from "react";

const RecipeItem = props => (
  <div
    className="col-sm-3 mt-4"
    onClick={() => props.recipeOnClick(props.recipe.title)}
  >
    <div className="card">
      <img
        className="card-img-top img-fluid"
        src={props.recipe.thumbnail}
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{props.recipe.title}</h5>
        <p className="card-text">
          <strong>Ingredients: </strong>
          {props.recipe.ingredients}
        </p>
      </div>
    </div>
  </div>
);

export default RecipeItem;
