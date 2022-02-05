import React from "react";
import { useState } from "react"
import { loginUser } from "../../services/apiConfig.js"
import { useNavigate, Link } from "react-router-dom";
import logincss from './LoginForm.module.css'

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
      localStorage.setItem("id", user?.data?.user._id);

      navigate('/')
    } catch (error) {
      console.error(error)
      console.log(form)

      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: '',
        password: '',
      })
    }
  }
  // console.log(form)

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
      <Link className={logincss.back_arrow} to='/'>GameTerest</Link>
      <h3 className={logincss.header}>Login</h3>
      <div className={logincss.form_body}>
        <form
          // className={logincss.input}
          onSubmit={onLogin}>
          <input
            className={logincss.input}
            required
            type="text"
            id="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
          />
          <br />
          <input
            className={logincss.input}
            required
            type="password"
            id="password"
            value={password}
            placeholder="password"
            onChange={handleChange} />
          <br />
          {handleError()}
          <button className={logincss.button}>Login</button>
        </form>
      </div>
    </div>)
}

export default LoginForm;
