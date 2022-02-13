import { deleteUserFavorites } from "../../services/apiConfig.js";
import Deletefavcss from "./DeleteFav.module.css";

export default function DeleteFavorite(props) {
  const handleDelete = async (e, favorite) => {
    e.preventDefault();
    const id = localStorage.getItem('id');
    let res = await deleteUserFavorites(id, favorite);
    window.location.reload(false);
  };

  return <div>

    <button className={Deletefavcss.button} onClick={(e) => { handleDelete(e, props.favid) }}>Delete</button>

  </div>;
};
