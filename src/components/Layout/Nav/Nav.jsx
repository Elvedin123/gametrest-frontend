// import './Nav.css'
import { NavLink } from 'react-router-dom'
import Logout from '../../Logout/Logout'
import navcss from './Nav.module.css'

// if token is true, 

const authenticatedOptions = (
  <div className={navcss.auth}>
    <NavLink className="logo" to="/">Gameterest</NavLink>
    <NavLink className="link" to="/"><button>Home</button></NavLink>
    <Logout />

  </div>
)
const unauthenticatedOptions = (
  <div className={navcss.noauthheader} className={navcss.noauth}>
    <NavLink className="logo" to="/">Gameterest</NavLink>
    <NavLink className={navcss.noauth} to="/signup"><button>Sign Up</button></NavLink>
    <NavLink className={navcss.noauth} to="/login"><button>Log In</button></NavLink>
  </div>
)
const Nav = () => {
  const token = localStorage.getItem('token')
  return (
    <nav>
      <div className="nav">
        <div className="links">
          {token ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  )
}
export default Nav
