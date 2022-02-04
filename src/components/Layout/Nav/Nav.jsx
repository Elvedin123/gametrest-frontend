// import './Nav.css'
import { NavLink } from 'react-router-dom'
// import Navcss from './Nav.module.css'

// if token is true, 

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
const Nav = () => {
  const token = localStorage.getItem('token')
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">Gameterest</NavLink>
        <div className="links">
          {token ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  )
}
export default Nav
