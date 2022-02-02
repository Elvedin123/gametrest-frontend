import React from "react";
import { useState } from "react"


const defaultUser = {
  email: "",
  password: "",
  isError: false,
  errorMsg: "",

}




function LoginForm(props) {
  const [form, setForm] = useState(defaultUser);
  const { email, password } = props

  const handelChange = (event) => {
    const { id, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  const handelError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          Login
        </button>

      )
    }
  }




  return (
    <div>
      <form>
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
          placeholder="password"
          onChanged={handelChange}
        />
        <br />
        {handelError()}
      </form>
    </div>)
}

export default LoginForm;
