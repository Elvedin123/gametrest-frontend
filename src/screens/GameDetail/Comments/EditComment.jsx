import React, { useEffect, useState } from 'react';
import { getAllComments, editUserComments } from '../../../services/apiConfig.js';
import { useParams } from 'react-router-dom';

const default_input = {
  comment: "",
}

export default function EditComment() {
  const [comment, setComment] = useState(default_input);

  let { id } = useParams();

  useEffect(() => {
    const fetchComment = async () => {
      const comment = await getAllComments(id) //Depends on ConfigApi?
      setComment(comment)
    }
    fetchComment();
  }, [id]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setComment(prevInput => ({
      ...prevInput,
      [id]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    editUserComments(id, comment) //Also from api??

  }

  return (
    // <form onSubmit={handleSubmit}>
    //   <input
    //     id="comment"
    //     input={comment}
    //     value={comment.comment} //This is supposed to call from the schema
    //     onChange={handleChange}
    //   />
    // </form>
    <button onSubmit={handleSubmit} onChange={handleChange}>Edit</button>
  );
}
