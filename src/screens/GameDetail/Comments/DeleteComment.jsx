import { deleteUserComments } from "../../../services/apiConfig.js";
import deletecommetcss from './DeleteComment.module.css'
// import { useNavigate } from "react-router";

// const userId = localStorage.getItem('userId')

export default function DeleteComment(props) {
  // function refreshPage() {
  //   window.location.reload(false)
  // }

  const handleDelete = () => {
    // e.preventDefault()
    // console.log(comment)
    const id = localStorage.getItem('id')
    const Delete = async () => {
    deleteUserComments(id, props.comment)
      // console.log(res)
    }
    Delete()
    // refreshPage()
    
  };

  return <button className={deletecommetcss.button} onClick={handleDelete}>Delete Comment</button>;
}
