import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import "./MusicianList.css";
import { Link } from "@reach/router";

const GET_MUSICIANS = gql`
  {
    musicians {
      id
      firstName
      lastName
      instrument
    }
  }
`;

export default function MusicianList() {
  const { loading, error, data } = useQuery(GET_MUSICIANS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <ul>
      {data.musicians.map((musician) => {
        return (
          <li key={musician.id}>
            <Link to={`/musicians/${musician.id}`}>
              <p className="name">{musician.firstName}</p>
              <p className="name"> {"  "}</p>
              <p className="name">{musician.lastName}</p>
            </Link>
            <p>{musician.instrument}</p>
          </li>
        );
      })}
    </ul>
  );
}
