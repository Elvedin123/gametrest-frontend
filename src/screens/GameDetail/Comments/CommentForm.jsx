import { useState } from 'react';
import { addComment } from '../../../services/apiConfig';
import commentformcss from './CommentForm.module.css'
// import { useParams } from 'react-router-dom';



export default function CommentForm(props) {
  // Schema calls for game, comment, and likes. I am assuming we just want to  edit the comment
  console.log(props.gameId)
  // const { id } = useParams()
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
    e.preventDefault()
    await addComment(comment, userId)
    console.log(comment)
  }

  return (
    <form className={commentformcss.form_body}>
      <textarea
        className={commentformcss.form}
        id='comment'
        value={comment.comment} //Bad naming convention?
        type="text"
        placeholder="Tell us your thoughts on this game!"
        onChange={(e) => { handleChange(e) }}
      />
      <button className={commentformcss.button} onClick={(e) => {handleSubmit(e)}}>Submit</button>
    </form>
  );
}
