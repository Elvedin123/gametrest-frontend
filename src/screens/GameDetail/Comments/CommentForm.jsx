import { useState } from 'react';
import { addComment } from '../../../services/apiConfig';
import commentformcss from './CommentForm.module.css';

export default function CommentForm(props) {

  const default_input = {
    game: props.gameId,
    comment: "",
    likes: 0
  };
  const [comment, setComment] = useState(default_input);
  const userId = localStorage.getItem('id');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setComment(prevInput => ({
      ...prevInput,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addComment(comment, userId);
    window.location.reload(false);
  };

  return (
    <form className={commentformcss.form_body}>
      <textarea
        className={commentformcss.form}
        id='comment'
        value={comment.comment}
        type="text"
        placeholder="Tell us your thoughts on this game!"
        onChange={(e) => { handleChange(e) }}
      />
      <button className={commentformcss.button} onClick={(e) => { handleSubmit(e) }}>Submit</button>
    </form>
  );
};
