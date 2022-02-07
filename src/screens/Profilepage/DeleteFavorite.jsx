import { deleteUserFavorites } from "../../services/apiConfig.js";
import Deletefavcss from "./DeleteFav.module.css"


export default function DeleteFavorite(props) {
  // function refreshPage() {
  //   window.location.reload(false)
  // }
  const handleDelete = (e, favorite) => {
    e.preventDefault()
    console.log(favorite)
    const id = localStorage.getItem('id')
    const Delete = () => {
      let res = deleteUserFavorites(id, favorite)
      console.log(res)
    }
    Delete()
    // refreshPage()
    console.log(props.favid)
  };

  return <div>

    <button className={Deletefavcss.button} onClick={(e) => { handleDelete(e, props.favid) }}>Delete</button>

  </div>;
}
