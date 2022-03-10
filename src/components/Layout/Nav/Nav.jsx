import { NavLink } from 'react-router-dom';
import Logout from '../../Logout/Logout';
import navcss from './Nav.module.css';

const Nav = () => {

  const authenticatedOptions = (
    <div className={navcss.auth}>
      <div className={navcss.logo}>
        <NavLink className={navcss.logo_title} to="/"><span className={navcss.white_logo}>Game</span><span className={navcss.black_logo}>terest</span></NavLink>
      </div>
      <div className={navcss.nav_buttons}>
        <NavLink className="link" to="/"><button>Home</button></NavLink>
        <NavLink className={navcss.navavatar} to="/profile"><button>Profile</button></NavLink>
        <Logout />
      </div>
    </div>
  );

  const unauthenticatedOptions = (
    <div className={navcss.noauth} >
      <div className={navcss.logo}>
        <NavLink className={navcss.logo_title2} to="/"><span className={navcss.white_logo}>Game</span><span className={navcss.black_logo}>terest</span></NavLink>
      </div>
      <div className={navcss.nav_buttons}>
        <NavLink
          to="/signup"><button>Sign Up</button></NavLink>
        <NavLink to="/login"><button>Log In</button></NavLink>
      </div>
    </div>
  );

  const token = localStorage.getItem('token')
  return (
    <nav className={navcss.nav}>
      <div >
        <div className="links">
          {token ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
