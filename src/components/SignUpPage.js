import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import "./SignUpPage.css";

const POST_MUSICIAN = gql`
  mutation PostMusician(
    $firstName: String!
    $lastName: String!
    $instrument: String!
    $email: String!
  ) {
    postMusician(
      firstName: $firstName
      lastName: $lastName
      instrument: $instrument
      email: $email
    ) {
      id
      firstName
      lastName
      instrument
      email
    }
  }
`;

export default function SignUpPage() {
  const [postMusician, { data }] = useMutation(POST_MUSICIAN);
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [instrument, setInstrument] = useState("");
  const [email, setEmail] = useState("");
  if (data) console.log(data);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(firstName, lastName, instrument, email);
          postMusician({
            variables: { firstName, lastName, instrument, email },
          });
        }}
      >
        <label>
          firstName:{" "}
          <input
            type="text"
            name="firstname"
            className="SignUp"
            onChange={(event) => {
              setFirstname(event.target.value);
            }}
          />
        </label>
        <label>
          lastName:{" "}
          <input
            type="text"
            name="lastname"
            className="SignUp"
            onChange={(event) => {
              setLastname(event.target.value);
            }}
          />
        </label>
        <label>
          email:{" "}
          <input
            type="email"
            name="email"
            className="SignUp"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>
        <label>
          instrument:{" "}
          <input
            type="text"
            name="instrument"
            className="SignUp"
            onChange={(event) => {
              setInstrument(event.target.value);
            }}
          />
        </label>
        {/* username:{" "}
          <input type="text" name="username" onChange={this.handleChange} />
          password:{" "}
          <input type="password" name="password" onChange={this.handleChange} /> */}
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}
