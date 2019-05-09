import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange(field, text) {
    this.setState(state => {
      state[field] = text;
      return state;
    });
  }

  handleRegister = e => {
    e.preventDefault();
    try {
      this.props.register(this.state);
      this.props.login(this.state);
      this.props.redirectHome();
    } catch (err) {
      alert(err);
    }
  };

  handleLogin = e => {
    e.preventDefault();
    try {
      this.props.login(this.state);
      this.props.redirectHome();
    } catch (err) {
      alert(err);
    }
  };

  render = () => {
    return (
      <form className="form-signin">
        <div className="text-center mb-4">
          <h1 className="h3 mb-3 font-weight-normal">Login / Register</h1>
        </div>

        <div className="form-label-group">
          <label htmlFor="inputEmail">Username</label>
          <input
            name="username"
            onChange={e => {
              this.handleChange("username", e.target.value);
            }}
            value={this.state.username}
            className="form-control"
            placeholder="Username"
            required
          />
        </div>

        <div className="form-label-group mt-2">
          <label htmlFor="inputPassword">Password</label>
          <input
            name="password"
            onChange={e => {
              this.handleChange("password", e.target.value);
            }}
            value={this.state.password}
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </div>

        <div className="mt-5">
          <button
            className="login btn btn-lg btn-primary btn-block"
            type="submit"
            onClick={this.handleLogin}
          >
            Login
          </button>
          <button
            className="register btn btn-lg btn-secondary btn-block"
            type="submit"
            onClick={this.handleRegister}
          >
            Register
          </button>
        </div>
      </form>
    );
  };
}

export default Login;
