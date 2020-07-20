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
import Chat from "./components/Chat";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  request: (operation) => {
    const token = localStorage.getItem("token");
    console.log(token);
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
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
          <Musician path="/musicians/:musician_id" />
          <Group path="/groups/:group_id" />
          <Chat path="/chat" />
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
