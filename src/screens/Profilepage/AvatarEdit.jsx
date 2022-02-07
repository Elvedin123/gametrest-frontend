import { useEffect, useState } from 'react';
import { updateAvatar, verifyUser } from '../../services/apiConfig';
import { useNavigate } from 'react-router-dom';
import avatareditcss from './AvatarEdit.module.css'

const default_input = {
  avatar: "",
}


export default function AvatarEdit() {
  const [image, setImage] = useState(default_input);

  const id = localStorage.getItem('id');
  const navigate = useNavigate()


  useEffect(() => {
    const fetchAvatar = async () => {
      const getAvatar = await verifyUser();
      setImage(getAvatar.data?.user);
    }
    fetchAvatar()
  }, [id]);

  function refreshPage() {
    window.location.reload(false)
  }

  const handleTextInput = (e) => {
    const { id, value } = e.target;
    setImage(prevImage => ({
      ...prevImage,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAvatar(image);
    navigate('/profile');
    refreshPage();
  }
  return (
    <div>
      <h1 className={avatareditcss.header}>Update your Avatar!</h1>
      <form className={avatareditcss.form} onSubmit={handleSubmit}>
        <input className={avatareditcss.input} type="text" id="avatar" name="avatar" value={image.avatar} placeholder="Profile url" onChange={handleTextInput} />
        <br />
        <button className={avatareditcss.button}>Save</button>
      </form>
    </div>
  );
}
