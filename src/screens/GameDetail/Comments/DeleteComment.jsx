import { deleteUserComments } from "../../../services/apiConfig.js";
// import { useNavigate } from "react-router";

// const userId = localStorage.getItem('userId')

export default function DeleteComment(props) {
  // const navigate = useNavigate()

<<<<<<< HEAD
  const handleDelete = async () => {
    // await deleteUserComments(userId, id);
    console.log(deleteUserComments)
    // navigate("/profile")

=======
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
>>>>>>> f0b049336db4b4b687e02109e2d0a2091e8c8792
  };

  return <button onClick={(e) => {handleDelete(e, props.comment)}}>Delete Comment</button>;
}
