import { deleteUserComments } from "../../../services/apiConfig.js";
// import { useNavigate } from "react-router";

// const userId = localStorage.getItem('userId')

export default function DeleteComment() {
  // const navigate = useNavigate()

  const handleDelete = async () => {
    // await deleteUserComments(userId, id);
    console.log(deleteUserComments)
    // navigate("/profile")

  };

  return <button onClick={handleDelete}>Delete Comment</button>;
}
