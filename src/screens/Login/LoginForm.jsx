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




function LoginForm(props) {
  const [form, setForm] = useState(defaultUser);
  const navigate = useNavigate()

  const { email, password } = props
  // const navigate = useNavigate();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  const onLogin = async (event) => {
    event.preventDefault()
    // const { setUser } = props
    try {
      const user = await loginUser(form)
      // setUser(user)
      console.log(user)
      // console.log(user.data.user.userName)
      console.log(user.data.user._id)
      localStorage.setItem("token", user.data.token);
      localStorage.setItem("id", user?.data.user._id);

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

  // const { email, password } = form


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
