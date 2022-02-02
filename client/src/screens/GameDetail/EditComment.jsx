import React, { useEffect } from 'react';

const default_input = {
  comment: "",
}

export default function EditComment() {
  const [comment, setComment] = useState(default_input);

  let { id } = useParams();

  useEffect(() => {
    const fetchComment = async () => {
      const comment = await getComment(id) //Depends on ConfigApi?
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
    await updateComment(id, comment) //Also from api??

  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <input
          id="comment"
          value={comment}
          onChange={handleChange}
        />
      </form>
    </Layout>
  );
}
