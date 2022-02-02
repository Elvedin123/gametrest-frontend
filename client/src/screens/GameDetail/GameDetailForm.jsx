import { useState, useEffect } from 'react';

export default function GameDetailForm() {
  // Schema calls for game, comment, and likes. I am assuming we just want to  edit the comment
  const [comment, setComment] = useState({
    comment: "",
  })

  let { id } = useParams();

  useEffect(() => {
    const fetchGame = async () => {
      const comment = await getGame(id)
      setComment(comment)
    }
    fetchGame();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateComment(id, comment)
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
      <div>

      </div>
    </Layout>
  );
}
