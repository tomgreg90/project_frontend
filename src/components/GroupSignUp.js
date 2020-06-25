import React, { useState } from "react";

export default function GroupSignUp() {
  const [groupName, setGroupName] = useState("");
  const [secretary, setSecretary] = useState("");
  return (
    <div>
      <h2>Sign Up Page</h2>{" "}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(groupName, secretary);
        }}
      >
        Name of Group:{" "}
        <input
          type="text"
          name="groupName"
          onChange={(event) => {
            setGroupName(event.target.value);
          }}
        />
        Name of Group Secretary:{" "}
        <input
          type="text"
          name="secretary"
          onChange={(event) => {
            setSecretary(event.target.value);
          }}
        />
        Address: <input type="text" name="address" />
        email: <input type="email" name="email" />
        username: <input type="text" name="username" />
        password: <input type="password" name="password" />{" "}
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

// export default class GroupSignUp extends Component {
//   state = {
//     groupName: "",
//     secretary: "",
//     address: "",
//     email: "",
//     username: "",
//     password: "",
//   };
//   render() {
//     //console.log(this.state);
//     return (
//       <div>
//         <h2>Sign Up Page</h2>
//         <form onSubmit={this.handleSubmit}>
//           Name of Group:{" "}
//           <input type="text" name="groupName" onChange={this.handleChange} />
//           Name of Group Secretary:{" "}
//           <input type="text" name="secretary" onChange={this.handleChange} />
//           Address:{" "}
//           <input type="text" name="address" onChange={this.handleChange} />
//           email:{" "}
//           <input type="email" name="email" onChange={this.handleChange} />
//           username:{" "}
//           <input type="text" name="username" onChange={this.handleChange} />
//           password:{" "}
//           <input type="password" name="password" onChange={this.handleChange} />
//         </form>
//       </div>
//     );
//   }

//   handleChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(this.state);
//   };
// }
