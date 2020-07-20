import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        username
      }
    }
  }
`;

export default function LoginPage() {
  const [login, { data }] = useMutation(LOGIN_USER);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  if (data) {
    console.log(data);
    localStorage.setItem("token", data.login.token);
  }
  return (
    <div>
      <h2>Login Here!</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login({ variables: { username, password } });
          //navigate(`/musicians/${data.login.user.username}`);
        }}
      >
        Username:
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        Password:{" "}
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value="login!" />
      </form>
      <h2>or</h2>
      <h2>
        click <Link to="/signup">Here</Link> to sign up
      </h2>
    </div>
  );
}
