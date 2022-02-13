
// We are not utilizing this component just yet. So it might rough around the edges.

import { useEffect, useState } from 'react';
import { getAllComments, editUserComments } from '../../../services/apiConfig.js';
import { useParams } from 'react-router-dom';
import GameDetail from '../GameDetail.jsx';
const default_input = {
  comment: "",
};

export default function EditComment() {
  const [comment, setComment] = useState(default_input);
  const userId = localStorage.getItem('id');
  let { id } = useParams();

  useEffect(() => {
    const fetchComment = async () => {
      const getComments = await getAllComments(id) //Depends on ConfigApi?
      setComment(getComments.data);
    };
    fetchComment();
  }, [id]);

  const handleChange = async () => {
    await editUserComments(userId, comment) //Also from api??

    return (
      <div>
        <h1>HOPEFUL</h1>
        <GameDetail />
      </div>
    )
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await editUserComments(userId, comment) //Also from api??

  }
  // Click on edit, the reivew/comment populates within a form. The form will have a button to resubmit 


  return (
    <form onSubmit={handleSubmit}>
      <input
        id="comment"
        input={comment.comment}
        value={comment.comment} //This is supposed to call from the schema
        onChange={handleChange}
      />
      <button onClick={handleChange}>Edit</button>
    </form>
  );
};
