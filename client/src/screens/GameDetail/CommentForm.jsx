import { useState } from 'react';

export default function CommentForm() {
  // Schema calls for game, comment, and likes. I am assuming we just want to  edit the comment
  const [comment, setComment] = useState({
    comment: "",
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createComment(id, comment) //Create Comment come from api
  }

  const handleChange = (event) => {
    const { id, value } = event.target;
    setComment({
      ...comment,
      [id]: value,
    })
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <input
          id='comment'
          value={comment.comment} //Bad naming convention?
          type="text"
          placeholder="Tell us your thoughts on this game!"
          onChange={handleChange}
        />
      </form>
    </Layout>
  );
}
