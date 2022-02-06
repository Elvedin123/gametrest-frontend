import { deleteUserComments } from "../../../services/apiConfig.js";

export default function DeleteComment(props) {
  const handleDelete = async () => {
    deleteUserComments(props._id);
    props.handleToggle()
  };

  return <button onClick={handleDelete}>Delete Comment</button>;
}
