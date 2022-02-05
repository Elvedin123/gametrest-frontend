// import './Nav.css'
import { NavLink } from 'react-router-dom'
import Logout from '../../Logout/Logout'
import navcss from './Nav.module.css'

// if token is true, 
const authenticatedOptions = (
  <div className={navcss.auth}>
    <div className={navcss.logo}>
      <NavLink to="/"><span className={navcss.white_logo}>Game</span><span className={navcss.black_logo}>terest</span></NavLink>
    </div>
    <div className={navcss.nav_buttons}>
      <NavLink className="link" to="/"><button>Home</button></NavLink>
      <NavLink className="avatar" to="/profile"><button>Profile</button></NavLink>
      <Logout />
    </div>
  </div>
)
const unauthenticatedOptions = (
  <div className={navcss.noauth} >
    <div className={navcss.logo}>
      <NavLink className="logo" to="/"><span className={navcss.white_logo}>Game</span><span className={navcss.black_logo}>terest</span></NavLink>
    </div>
    <div className={navcss.nav_buttons}>
      <NavLink
        to="/signup"><button>Sign Up</button></NavLink>
      <NavLink to="/login"><button>Log In</button></NavLink>
    </div>
  </div>
)
const Nav = () => {
  const token = localStorage.getItem('token')
  return (
    <nav className={navcss.nav}>
      <div >
        <div className="links">
          {token ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  )
}
export default Nav
