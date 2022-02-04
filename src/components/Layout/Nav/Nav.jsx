// import './Nav.css'
import { NavLink } from 'react-router-dom'
import Logout from '../../Logout/Logout'
// import Navcss from './Nav.module.css'

// if token is true, 

const authenticatedOptions = (
  <>

    <NavLink className="link" to="/"><button>Home</button></NavLink>
    <Logout />

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
