import React from "react";
import { useState } from "react"
// import { loggingIn } from "../../services/apiConfig.js"
// import { useNavigate } from "react-router-dom";

const defaultUser = {
  email: "",
  password: "",
  isError: false,
  errorMsg: "",

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
    }
  };




  return (
    <div>
      <form>
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
