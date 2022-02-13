import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout(props) {
  const { setUser } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const signOutUser = async () => {
      setUser(null);
      navigate('/');
    }
    signOutUser();
  }, [])
  return ''
};
