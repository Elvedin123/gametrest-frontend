import { deleteUserComments } from "../../../services/apiConfig.js";
// import { useNavigate } from "react-router";


export default function DeleteComment(props) {
  // const navigate = useNavigate()

  const handleDelete = (e, comment) => {
    e.preventDefault()
    console.log(comment)
    const id = localStorage.getItem('id')
    const Delete = async () => {
      let res = deleteUserComments(id, comment)
      console.log(res)
    }
    Delete()
    console.log(props.comment)
  };

  return <button onClick={(e) => {handleDelete(e, props.comment)}}>Delete Comment</button>;
}
