// import './Nav.css'
import { NavLink } from 'react-router-dom'

// if token is true, 
const token = localStorage.getItem('token')
const authenticatedOptions = (
  <>
    <NavLink className="link" to="/">Home</NavLink>
    <NavLink className="link" to="/Logout">Logout</NavLink>
  </>
)
const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/signup">Sign Up</NavLink>
    <NavLink className="link" to="/login">Log In</NavLink>
  </>
)
const Nav = ({ token }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">Gameterest</NavLink>
        <div className="links">
          {token ? unauthenticatedOptions : authenticatedOptions}
        </div>
      </div>
    </nav>
  )
}
export default Nav
