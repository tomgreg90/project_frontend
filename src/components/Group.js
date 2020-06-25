import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import "./Profile.css";

const GET_GROUP_BY_ID = gql`
  query GetGroup($group_id: ID!) {
    groupById(id: $group_id) {
      id
      groupName
      musicGenre
      contact
      email
      about
    }
  }
`;

export default function Group({ group_id }) {
  const { loading, error, data } = useQuery(GET_GROUP_BY_ID, {
    variables: { group_id },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const { groupName, musicGenre, id, contact, email, about } = data.groupById;

  return (
    <div className="profilePage">
      <h1>{groupName}</h1>
      <p>Group Id: {id}</p>
      <p>Genre: {musicGenre}</p>
      <p>contact: {contact}</p>
      <p>contact details: {email}</p>
      <p>about us ... {about}</p>
    </div>
  );
}
