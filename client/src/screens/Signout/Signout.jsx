import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import {signOut} from '../../services' whatever the signout is

export default function Signout() {
  const { setUser } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const signOutUser = async () => {
      // await signOut(); From backend
      setUser(null);
      navigate('/');
    }
    signOutUser();
  }, [navigate, setUser])
  return ''
};
