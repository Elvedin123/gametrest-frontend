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
      </form>
    </div>)
}

export default LoginForm;
