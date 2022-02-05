
import { getAllComments } from '../../../services/apiConfig.js';
import { useState, useEffect } from 'react';

export default function Reviews(props) {

  const [comments, setComments] = useState([]);
  // const [avatar, setAvatar] = useState([]);
  useEffect(() => {
    const grabComments = async () => {
      const fetchComments = await getAllComments()
      setComments(fetchComments.data)

      // setAvatar(fetchComments)

    }
    grabComments()
  }, [])




  return (

    <div>
      {comments.map((comment) => {
        return (
          comment.comments.map((review) => {

            console.log(review.game)
            if (Number(review.game) === props.gameId) {
              return (
                <div key={review._id} >
                  TEST 2
                  <p>
                    {review.comment}
                  </p>
                </div>

              )
            }

          })
        )
      })}

    </div>
  );
}
