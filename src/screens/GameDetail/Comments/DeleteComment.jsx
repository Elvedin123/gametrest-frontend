import { deleteUserComments } from "../../../services/apiConfig.js";
import deletecommetcss from './DeleteComment.module.css'
// import { useNavigate } from "react-router";

// const userId = localStorage.getItem('userId')

export default function DeleteComment(props) {

  const handleDelete = (e, comment) => {
    e.preventDefault()
    console.log(comment)
    const id = localStorage.getItem('id')
    const Delete = async () => {
      let res = deleteUserComments(id, comment)
      console.log(res)
    }
    Delete()
    props.grabComments();
    console.log(props.comment)
  };

  return <button className={deletecommetcss.button} onClick={(e) => { handleDelete(e, props.comment) }}>Delete Comment</button>;
}
