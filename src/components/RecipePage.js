import React from "react";
import PropTypes from "prop-types";
import CommentsBlock from "./CommentsBlock";
import { slugify } from "../helpers";

const RecipePage = ({ recipe }) => {
  if (recipe) {
    return (
      <div>
        <img
          className="card-img-top img-fluid img-page"
          src={recipe.thumbnail}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{recipe.title}</h5>
          <p className="card-text">
            <strong>Ingredients: </strong>
            {recipe.ingredients}
          </p>
        </div>
        <CommentsBlock recipeSlug={slugify(recipe.title)} />
      </div>
    );
  } else {
    return <h1>Recipe not found</h1>;
  }
};

RecipePage.propTypes = {
  recipe: PropTypes.object
};

export default RecipePage;
