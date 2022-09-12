import React, { Component } from "react";
import Login from "./login";
class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
  };
  handleOnChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    const { username, password } = this.state.account;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Login
            name={username}
            onChange={this.handleOnChange}
            label="Username"
          />
          <Login
            name={password}
            onChange={this.handleOnChange}
            label="Password"
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
