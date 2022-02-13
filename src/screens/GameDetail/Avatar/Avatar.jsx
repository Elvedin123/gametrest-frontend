import { verifyUser } from '../../../services/apiConfig.js';
import { useEffect } from 'react';
import avatarcss from "./Avatar.module.css";
import { useStateIfMounted } from 'use-state-if-mounted';
export default function Avatar() {

  const [avatar, setAvatar] = useStateIfMounted();
  const id = localStorage.getItem('id');

  useEffect(() => {
    const fetchAvatar = async () => {
      const getAvatar = await verifyUser(id);
      setAvatar(getAvatar.data?.user);
    }
    fetchAvatar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!avatar) {
    return (
      <div>No Avatar</div>
    );
  };
  return (
    <div>
      <h3>Welcome, {avatar.userName}</h3>
      <img className={avatarcss.image} src={avatar.avatar} alt={avatar.userName} />

    </div>
  );
};
