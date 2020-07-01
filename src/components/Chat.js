import React, { Component } from "react";
import firebase from "../services/firebase";

export default class Chat extends Component {
  state = {
    chat: [],
    message: "",
    user: "",
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            firebase
              .database()
              .ref("james")
              .child("Tom")
              .push({ key: this.state.user, value: this.state.message });
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              this.setState({ user: e.target.value });
            }}
          />
          <input
            type="text"
            onChange={(e) => {
              this.setState({ message: e.target.value });
            }}
          />
          <input type="submit" />
        </form>
        <ul>
          {this.state.chat.map((chat) => {
            return (
              <li>
                <p>{chat.key}</p>
                <p>{chat.value}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  componentDidMount = () => {
    const chatRef = firebase.database().ref("james").child("Tom");

    chatRef.on("value", (snapshot) => {
      let chatArray = [];
      snapshot.forEach((snap) => {
        const value = snap.val();

        chatArray.push(value);
      });

      this.setState({ chat: chatArray });
    });
  };

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (this.state.mesage !== prevState.message)
  //     const chatRef = firebase.database().ref(prevState.user);
  //   chatRef.on("value", (snapshot) => {
  //     let chatArray = [];
  //     snapshot.forEach((snap) => {
  //       console.log(snap);
  //       const key = snap.key;
  //       const value = snap.val();
  //       chatArray.push({ key, value });
  //     });
  //   });
  // };
}
