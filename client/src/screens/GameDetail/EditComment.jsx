import React, { useEffect } from 'react';

export default function EditComment() {
  const [comment, setComment] = useState({
    comment: "",
  })

  let { id } = useParams();

  useEffect(() => {
    const fetchComment = async () => {
      const comment = await getComment(id) //Depends on ConfigApi?
      setComment(comment)
    }
    fetchComment();
  }, []);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setComment({
      ...comment,
      [id]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    await updateComment(id, comment) //Also from api??

  }

  return <div></div>;
}
