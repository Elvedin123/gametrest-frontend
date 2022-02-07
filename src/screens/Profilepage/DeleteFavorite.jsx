import { deleteUserFavorites } from "../../services/apiConfig.js";

export default function DeleteFavorite(props) {
  const handleDelete = (e, favorite) => {
    e.preventDefault()
    console.log(favorite)
    const id = localStorage.getItem('id')
    const Delete = () => {
      let res = deleteUserFavorites(id, favorite)
      console.log(res)
    }
    Delete()
    console.log(props.favid)
  };

  return <div>
    <button onClick={(e) => { handleDelete(e, props.favid) }}>gtfo</button>
  </div>;
}
