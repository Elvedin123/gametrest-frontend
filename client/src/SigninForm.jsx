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

function SigninForm() {
  const [newUser, setNewUser] = useState(defaultNewUser)
  const [validationMessage, setValidationMessage] = useState("");
  const [valid, setValid] = useState(false);

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


  return (<div>

  </div>)
}

export default SigninForm;
