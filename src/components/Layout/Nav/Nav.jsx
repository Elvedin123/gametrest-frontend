// import './Nav.css'
import { NavLink } from 'react-router-dom'
import Navcss from './Nav.module.css'

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/"><button>Home</button></NavLink>
    <NavLink className="link" to="/Logout"><button>Log Out</button></NavLink>
  </>
)
const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/signup"><button>Sign Up</button></NavLink>
    <NavLink className="link" to="/login"><button>Log In</button></NavLink>
  </>
)
const Nav = ({ user }) => {
  return (
    <nav>
      <div className={Navcss.navbar}>
        <NavLink className="logo" to="/">Gameterest</NavLink>
        <div className="links">
          {user && <div className="link welcome">Welcome, {user.username}</div>}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  )
}
export default Nav
