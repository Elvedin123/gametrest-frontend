
import { updateAvatar } from '../../services/apiConfig';
import { useNavigate, Link } from 'react-router-dom';
import avatareditcss from './AvatarEdit.module.css'
import { useStateIfMounted } from 'use-state-if-mounted';

const default_input = {
  avatar: "",
}


export default function AvatarEdit() {
  const [image, setImage] = useStateIfMounted(default_input);

  // const id = localStorage.getItem('id');
  const navigate = useNavigate()


  // useEffect(() => {
  //   const fetchAvatar = async () => {
  //     const getAvatar = await verifyUser(id);
  //     setImage(getAvatar.data?.user);
  //   }
  //   fetchAvatar()
  // }, [id, setImage]);

  // function refreshPage() {
  //   window.location.reload(false)
  // }

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
    // refreshPage();
  }
  return (
    <div>
      <Link className={avatareditcss.back_arrow} to='/'><span className={avatareditcss.white_logo}>Game</span><span className={avatareditcss.red_logo}>terest</span></Link>

      <h1 className={avatareditcss.header}>Update your Avatar!</h1>
      <div className={avatareditcss.overall_div}>
        <form className={avatareditcss.form} onSubmit={handleSubmit}>
          <input className={avatareditcss.input} type="text" id="avatar" name="avatar" value={image.avatar} placeholder="Profile url" onChange={handleTextInput} />
          <br />
          <button className={avatareditcss.button}>Save</button>
        </form>
      </div>
    </div>
  );
}
