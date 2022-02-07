import Layout from "../../components/Layout/Layout"
import profilepagecss from "./ProfilePage.module.css"
<<<<<<< HEAD
import Userfavorites from "./Userfavorites.jsx"
=======
// import { addFavorite } from "../../services/apiConfig.js"
// import { useEffect, useState } from "react"
import Avatar from "../GameDetail/Avatar/Avatar.jsx"
>>>>>>> 63970fd62ff4dc10504dabb604628ff3ccce78ee
function ProfilePage() {

  return (
    <div >
      <Layout>
        <div className={profilepagecss.parent_profile}>
          <div className={profilepagecss.profilepic_container}>
            <Avatar />
            <input type="text" name="" placeholder="Profile url" id="" />
            <br />
            <button>Edit</button>
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