import { useState } from 'react';
import { addComment } from '../../../services/apiConfig';



export default function CommentForm(props) {
  // Schema calls for game, comment, and likes. I am assuming we just want to  edit the comment
  
  const default_input = {
    game: props.gameId,
    comment: "",
    likes: 0
  }
  const [comment, setComment] = useState(default_input)
  const userId = localStorage.getItem('id')
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setComment(prevInput => ({
      ...prevInput,
      [id]: value,
    }))
  }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await addComment(comment, userId)
      console.log(comment)
    }

  return (
    <form>
      <input
        id='comment'
        value={comment.comment} //Bad naming convention?
        type="text"
        placeholder="Tell us your thoughts on this game!"
        onChange={(e) => {handleChange(e)}}
      />
      <button onClick={(e) => {handleSubmit(e)}}>Submit</button>
    </form>
  );
}
