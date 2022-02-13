import { NavLink, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../services/apiConfig';

export default function Logout() {
  const navigate = useNavigate();

  const handleClick = async () => {
    await logoutUser();
    localStorage.removeItem("id");
    localStorage.removeItem('token');
    navigate('/');
  }

  return <>
    <NavLink className="link" to="/Logout"><button onClick={handleClick}>Log Out</button></NavLink>
  </>;
};
