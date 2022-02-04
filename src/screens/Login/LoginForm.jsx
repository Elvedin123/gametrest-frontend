import React from "react";
import { useState } from "react"
import { loginUser } from "../../services/apiConfig.js"
import { useNavigate } from "react-router-dom";

const defaultUser = {
  email: "",
  password: "",
  isError: false,
  errorMsg: "",

}
const navigate = useNavigate()

const onLogin = async (event) => {
  event.preventDefault()
  const { setUser } = props
  try {
    const user = await loginUser(form)
    setUser(user)
    navigate('/')
  } catch (error) {
    console.error(error)
    setForm({
      isError: true,
      errorMsg: "Invalid Credentials",
      email: '',
      password: '',
    })
  }
}


function LoginForm(props) {
  const [form, setForm] = useState(defaultUser);
  const { email, password } = props
  // const navigate = useNavigate();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  const handleError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type='submit'>Log in</button>
    }
  };

  const { email, password } = form


  return (
    <div>
      <form onSubmit={onLogin}>
        <input
          required
          type="text"
          id="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
        />
        <br />
        <input
          required
          type="password"
          id="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
        />
        <br />
        {handleError()}
        <button>Login</button>
      </form>
    </div>)
}

export default LoginForm;
