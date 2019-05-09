import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";
import Login from "./Login";
import User from "./User";
import { slugify } from "../helpers";
import recipes from "../sample_data/recipes.json";
import { withRouter, matchPath, Redirect } from "react-router";
import { register, login, isLogged, logout } from "../services/loginService";

class App extends Component {
  filteredRecipes(searchString) {
    if (!searchString) {
      return recipes.results;
    }
    return recipes.results.filter(
      recipe =>
        recipe.title.toLowerCase().includes(searchString.toLowerCase()) ||
        recipe.ingredients.toLowerCase().includes(searchString.toLowerCase())
    );
  }

  getRecipeFromSlug(slug) {
    return recipes.results.find(recipe => slugify(recipe.title) === slug);
  }

  recipeOnClick = recipeName => {
    this.props.history.push(`/recipe/${slugify(recipeName)}`);
  };

  getSearchString = () => {
    const match = matchPath(this.props.location.pathname, {
      path: "/:searchString",
      exact: true
    });

    return match ? match.params.searchString : "";
  };

  onNavBarChange = input => {
    this.props.history.push(`/${input}`);
  };

  redirectHome = () => {
    this.props.history.push("/");
  };

  render() {
    const LoginRoute = () =>
      isLogged() ? (
        <Redirect to="/" />
      ) : (
        <Login
          register={register}
          login={login}
          redirectHome={this.redirectHome}
        />
      );
    const ProfileRoute = () =>
      !isLogged() ? (
        <Redirect to="/" />
      ) : (
        <User redirectHome={this.redirectHome} logout={logout} />
      );
    return (
      <div className="App">
        <Navbar
          searchString={this.getSearchString()}
          onNavBarChange={this.onNavBarChange}
        />
        )}/>
        <div className="container mt-10">
          <Route
            path="/:searchString?"
            render={props => (
              <Home
                recipeOnClick={this.recipeOnClick}
                recipes={this.filteredRecipes(props.match.params.searchString)}
              />
            )}
          />
          <Route
            exact
            path="/recipe/:slug"
            render={props => (
              <RecipePage
                recipe={this.getRecipeFromSlug(props.match.params.slug)}
              />
            )}
          />

          <Route path="/user/login" component={LoginRoute} />
          <Route path="/user/profile" component={ProfileRoute} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
