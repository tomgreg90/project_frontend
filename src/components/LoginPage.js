import React, { Component } from "react";
import { Link } from "@reach/router";

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <h2>Login Here!</h2>
        <form>
          Username:
          <input type="text" />
          Password: <input type="password" />
        </form>
        <h2>or</h2>
        <h2>
          click <Link to="/signup">Here</Link> to sign up
        </h2>
      </div>
    );
  }
}
