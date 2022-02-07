import Layout from "../../components/Layout/Layout";
import profilepagecss from "./ProfilePage.module.css";
import Userfavorites from "./Userfavorites.jsx";
import { updateAvatar, verifyUser } from "../../services/apiConfig.js";
import { useEffect, useState } from "react";
import Avatar from "../GameDetail/Avatar/Avatar.jsx";

const default_input = {
  avatar: "",
}

function ProfilePage() {

  const [image, setImage] = useState(default_input);
  const id = localStorage.getItem('id');

  useEffect(() => {
    const fetchAvatar = async () => {
      const getAvatar = await verifyUser();
      setImage(getAvatar.data?.user);
    }
    fetchAvatar()
  }, [id]);

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
  }

  return (
    <div >
      <Layout>
        <div className={profilepagecss.parent_profile}>
          <div className={profilepagecss.profilepic_container}>


            <Avatar />
            <form onSubmit={handleSubmit}>
              <input type="text" id="avatar" name="avatar" value={image.avatar} placeholder="Profile url" onChange={handleTextInput} />
              <br />
              <button>Edit</button>
            </form>


          </div>
          <h2 className={profilepagecss.favorites_title}>Favorites</h2>
          <div className={profilepagecss.favorites_container}>
            <Userfavorites />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ProfilePage