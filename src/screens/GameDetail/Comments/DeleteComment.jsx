import { deleteUserComments } from "../../../services/apiConfig.js";
import deletecommetcss from './DeleteComment.module.css'
// import { useNavigate } from "react-router";

// const userId = localStorage.getItem('userId')

export default function DeleteComment(props) {
  // function refreshPage() {
  //   window.location.reload(false)
  // }

  const handleDelete = async () => {
    const id = localStorage.getItem('id')
    await deleteUserComments(id, props.comment)
    window.location.reload(false)
      // console.log(res)
    
    
  };

  return <button className={deletecommetcss.button} onClick={handleDelete}>Delete Comment</button>;
}
