import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {

  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">Gameterest</NavLink>
        <div className="links">
          {/* <NavLink className="link" to="/"></NavLink>
          <NavLink className="link" to="/"></NavLink> */}
        </div>
      </div>
    </nav>
  )

}

export default Nav