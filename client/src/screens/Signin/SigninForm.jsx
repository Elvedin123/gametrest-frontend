import React from 'react';
import { useState } from "react"


defaultNewUser = {
  userName: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

function SigninForm(props) {
  const [newUser, setNewUser] = useState(defaultNewUser)
  const [validationMessage, setValidationMessage] = useState("");
  const [valid, setValid] = useState(false);
  const { username, firstName, lastName, email, password, passwordConfirmation } = props


  const handelChange = (event) => {
    const { id, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }


  const checkIfValid = () => {
    if (newUser.password === "" || newUser.confirmPassword === "") {
      setValidationMessage("");
      setValid(false);
    } else if (newUser.password.length < 9) {
      setValidationMessage("Short password! Must be at least 8 characters");
    } else if (newUser.password !== newUser.confirmPassword) {
      setValidationMessage("Password does not match!");
      setValid(false);
    } else {
      setValidationMessage("Password match!");
      setValid(true);
    }
  };



  return (
    <div>
      <form>
        <input
          required
          type="type"
          id="username"
          value={username}
          placeholder=""
          onchange={handelChange}
        />
        <br />
        <input
          required
          type="type"
          id="firstName"
          value={firstName}
          placeholder="First Name"
          onchange={handelChange}
        />
        <br />
        <input
          required
          type="type"
          id="lastName"
          value={lastName}
          placeholder="Last Name"
          onchange={handelChange}
        />
        <br />
        <input
          required
          type="type"
          id="email"
          value={email}
          placeholder="Email"
          onchange={handelChange}
        />
        <br />
        <input
          required
          type="password"
          id="password"
          value={password}
          placeholder="Password"
          onchange={handelChange}
        />
        <br />
        <input
          required
          type="password"
          id="passwordConfirmation"
          value={passwordConfirmation}
          placeholder="Password Confirmation"
          onchange={handelChange}
        />
      </form>
    </div >)
}

export default SigninForm;
