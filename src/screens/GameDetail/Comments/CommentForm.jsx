import { useState } from 'react';

const default_input = {
  comment: "",
}

export default function CommentForm() {
  // Schema calls for game, comment, and likes. I am assuming we just want to  edit the comment
  const [comment, setComment] = useState(default_input)

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   await createComment(comment) //Create Comment come from api
  // }

  const handleChange = (event) => {
    const { id, value } = event.target;
    setComment(prevInput => ({
      ...prevInput,
      [id]: value,
    }))
  }

  return (
    <form>
      <input
        id='comment'
        value={comment.comment} //Bad naming convention?
        type="text"
        placeholder="Tell us your thoughts on this game!"
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
