import React, { Component } from "react";
import firebase from "../services/firebase";
import "./Chat.css";
const db = firebase.firestore();

export default class Chat extends Component {
  state = {
    chat: [],
    message: "",
    user: "",
    newMessage: "",
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            db.collection("TomShaun")
              .doc("chat")
              .collection("users")
              .doc("tom")
              .set({
                firstname: "tom",
                lastname: "gregory",
              });
            db.collection("TomShaun")
              .doc("chat")
              .collection("users")
              .doc("shaun")
              .set({
                firstname: "shaun",
              });

            db.collection("TomShaun")
              .doc("chat")
              .collection("users")
              .doc("chat")
              .collection("messages")
              .doc()
              .set({
                from: this.state.user,
                message: this.state.message,
                timestamp: new Date().toDateString(
                  firebase.firestore.FieldValue.serverTimestamp()
                ),
              });
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
              <li className="message">
                <p>{chat.timestamp}</p>
                <p>{chat.from}</p>
                <p>{chat.message}</p>
              </li>
            );
          })}
        </ul>
        {this.state.newMessage && (
          <div>
            <p>{this.state.newMessage.timestamp}</p>
            <p>{this.state.newMessage.from}</p>
            <p>{this.state.newMessage.message}</p>
          </div>
        )}
      </div>
    );
  }

  componentDidMount = () => {
    db.collection("TomShaun")
      .doc("chat")
      .collection("users")
      .doc("chat")
      .collection("messages")
      .onSnapshot((snapshot) => {
        const messages = [];
        let newMessage;

        snapshot.forEach((doc) => {
          console.log(doc.data());
          messages.push(doc.data());
        });

        snapshot.docChanges().forEach(function (change) {
          if (change.type === "added") {
            newMessage = change.doc.data();
          }
        });

        this.setState({ chat: messages, newMessage });
      });
  };
}
