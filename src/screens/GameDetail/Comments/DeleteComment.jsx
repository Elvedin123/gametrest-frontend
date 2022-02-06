import { deleteUserComments } from "../../../services/apiConfig.js";
// import { useNavigate } from "react-router";


export default function DeleteComment() {
  // const navigate = useNavigate()

  const handleDelete = async () => {
    await deleteUserComments();
    console.log(deleteUserComments)
    // navigate("/profile")

  };

  return <button onClick={handleDelete}>Delete Comment</button>;
}
