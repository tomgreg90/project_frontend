import React from "react";
import SignUpPage from "./components/SignUpPage";
import { Router } from "@reach/router";
import LoginPage from "./components/LoginPage";
import GroupSignUp from "./components/GroupSignUp";
import { ApolloProvider } from "@apollo/react-hooks";
import "./App.css";
import MusicianList from "./components/MusicianList";
import Header from "./components/Header";
import ApolloClient from "apollo-boost";
import Musician from "./components/Musician";
import Group from "./components/Group";
import MusicianSearch from "./components/MusicianSearch";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <Router>
          <SignUpPage path="/signup" />
          <LoginPage path="/" />
          <GroupSignUp path="/groupsignup" />
          <MusicianList path="/musicians" />
          <MusicianSearch path="/search" />
          <Musician path="/musicians/:musician_id" />
          <Group path="/groups/:group_id" />
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
