import { deleteUserComments } from "../../../services/apiConfig.js";
import deletecommetcss from './DeleteComment.module.css';

export default function DeleteComment(props) {

  const handleDelete = async () => {
    const id = localStorage.getItem('id');
    await deleteUserComments(id, props.comment);
    window.location.reload(false);
  };

  return <button className={deletecommetcss.button} onClick={handleDelete}>Delete Comment</button>;
};
