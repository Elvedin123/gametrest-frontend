import Layout from "../../components/Layout/Layout";
import profilepagecss from "./ProfilePage.module.css";
import Userfavorites from "./Userfavorites.jsx";
import Avatar from "../GameDetail/Avatar/Avatar.jsx";
import { Link } from 'react-router-dom';

function ProfilePage() {
  return (
    <div >
      <Layout>
        <div className={profilepagecss.parent_profile}>
          <div className={profilepagecss.profilepic_container}>


            <Avatar />
            <Link to="/edit-profile" className={profilepagecss.edit_avatar} >
              Edit your Avatar
            </Link>



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