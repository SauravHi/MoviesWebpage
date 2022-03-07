import React, { useState } from "react";

function Profile() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1>Form Handling</h1>
      Name:
      <input
        type="text"
        name="user"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      ></input>
      <br />
      <br />
      Password:
      <input
        type="password"
        name="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <br />
      <br />
      <button
        onClick={() => {
          console.log(user, password);
        }}
      >
        Submit
      </button>
    </div>
  );
}
export default Profile;
