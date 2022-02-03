import React, {useCallback, useState, useEffect} from 'react';
import { createUser } from "../../services/apiConfig.js";
import {useNavigate}from "react-router-dom"


const defaultNewUser = {
  userName: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  avatar:""
}

function SignupForm(props) {
  const [newUser, setNewUser] = useState(defaultNewUser);
  const [validationMessage, setMessage] = useState("");
  const [valid, setValid] = useState(false);
  const { userName, firstName, lastName, email, password, confirmPassword, avatar } = props
  const navigate = useNavigate();

  const validate = useCallback(()=>{
  if (password !== confirmPassword) {
    setMessage("Password does not match!");
    setValid(false);
  } else if (password === "" || confirmPassword === "") {
    setMessage("");
    setValid(false);
  } else {
    setMessage("");
    setValid(true);
  }
},[setValid, setMessage, password, confirmPassword]);
 const handelChange = (event) => {
    const { id, value } = event.target;
    setNewUser((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createUser(newUser);
    console.log(newUser);
  };

  // const checkIfValid = () => {
  //   // if (password !== confirmPassword) {
  //   //   setMessage("Password does not match!");
  //   //   setValid(false);
  //   // } else if (password === "" || confirmPassword === "") {
  //   //   setMessage("");
  //   //   setValid(false);
  //   // } else {
  //   //   setMessage("");
  //   //   setValid(true);
  //   // }
  // };

  useEffect(() => {
    validate();
    console.log("validator");
    return function cleanUp() {
      navigate("/")
    }
}, [password, confirmPassword, navigate, validate]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>{validationMessage}</h3>
        <input
          required
          type="text"
          id="userName"
          value={userName}
          placeholder="User Name"
          onChange={handelChange}
        />
        <br />
        <input
          required
          type="text"
          id="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={handelChange}
        />
        <br />
        <input
          required
          type="text"
          id="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={handelChange}
        />
        <br />
        <input
          required
          type="text"
          id="email"
          value={email}
          placeholder="Email"
          onChange={handelChange}
        />
        <br />
        <input
          required
          type="password"
          id="password"
          value={password}
          placeholder="Password"
          onChange={handelChange}
        />
        <br />
        <input
          required
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          placeholder="Password Confirmation"
          onChange={handelChange}
        />
        <br />
        <input
          required
          type="text"
          id="avatar"
          value={avatar}
          placeholder="A picture of you!"
          onChange={handelChange}
        /> 
        <br/>
        <button disabled={!valid}>
          SignUp
        </button>
      </form>
    </div >)
}

export default SignupForm;