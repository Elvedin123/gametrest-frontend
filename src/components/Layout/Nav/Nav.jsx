// import './Nav.css'
import { NavLink } from 'react-router-dom'
import { verifyUser } from '../../../services/apiConfig'
import Logout from '../../Logout/Logout'
import navcss from './Nav.module.css'
import { useState, useEffect } from 'react'

// if token is true, 

const Nav = () => {
  const [avatar, setAvatar] = useState([])
  const authenticatedOptions = (
    <div className={navcss.auth}>
      <div className={navcss.logo}>
        <NavLink className={navcss.logo_title} to="/"><span className={navcss.white_logo}>Game</span><span className={navcss.black_logo}>terest</span></NavLink>
      </div>
      <div className={navcss.nav_buttons}>
        <NavLink className="link" to="/"><button>Home</button></NavLink>
        <NavLink className="avatar" to="/profile"><img src={avatar.avatar} alt={avatar.userName} /></NavLink>
        <Logout />
      </div>
    </div>
  )
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
  )

  const userId = localStorage.getItem('id')
  

  if (!userId) {
    return (
      <nav className={navcss.nav}>
        <div>
        <div className="links">{unauthenticatedOptions}</div>
        </div>
        </nav>
  
    )
  }
  // const token = localStorage.getItem('token')
  if (userId) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const fetchAvatar = async () => {
        const getAvatar = await verifyUser(userId)
        console.log(getAvatar.data?.user)
        setAvatar(getAvatar.data?.user)
      }
      fetchAvatar()
    }, [userId])
  return (
    <nav className={navcss.nav}>
      <div >
        <div className="links">
          {authenticatedOptions}
        </div>
      </div>
    </nav>
  )
}
}
export default Nav
