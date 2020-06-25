import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import "./Profile.css";

const GET_MUSICIAN_BY_ID = gql`
  query GetMusician($musician_id: ID!) {
    musicianById(id: $musician_id) {
      id
      firstName
      lastName
      instrument
      email
    }
  }
`;

export default function Musician({ musician_id }) {
  const { loading, error, data } = useQuery(GET_MUSICIAN_BY_ID, {
    variables: { musician_id },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const musician = data.musicianById;
  return (
    <div className="profilePage">
      <h3>
        {musician.firstName} {musician.lastName}
      </h3>
      <p>id: {musician.id}</p>

      <p>{musician.instrument}</p>
      <p>{musician.email}</p>
    </div>
  );
}
