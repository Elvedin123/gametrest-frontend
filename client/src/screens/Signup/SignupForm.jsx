import React from 'react';
import { useState, useEffect } from "react"
// import signUpLink "/"


const defaultNewUser = {
  userName: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

function SignupForm(props) {
  const [newUser, setNewUser] = useState(defaultNewUser);
  const [validationMessage, setValidationMessage] = useState("");
  const [valid, setValid] = useState(false);
  const { username, firstName, lastName, email, password, passwordConfirmation } = props


  const handelChange = (event) => {
    const { id, value } = event.target;
    setNewUser((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   await signUpLink(newUser);
  //   console.log(newUser);
  // };

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

  useEffect(() => {
    console.log("validator");
    checkIfValid();
  }, [password, passwordConfirmation]);

  return (
    <div>
      <form>
        <h3>{setValidationMessage}</h3>
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
        <br />
        <button disabled={!valid}>
          SignUp
        </button>
      </form>
    </div >)
}

export default SignupForm;
