import React from "react";
import { useState } from "react"


const defaultUser = {
  email: "",
  password: "",
  isError: false,
  errorMsg: "",

}




function LoginForm() {
  const [form, setForm] = useState(defaultUser);

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
        <button type="submit" className={ } type="submit">
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
          value=""
          placeholder="Email"
          onChange={ }
        />
        <br />
        <input
          required
          type="password"
          id="password"
          value={ }
          placeholder="password"
          onChanged={ }
        />
        <br />
        {handelError()}
      </form>
    </div>)
}

export default LoginForm;
