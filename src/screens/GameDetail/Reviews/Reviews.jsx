// import React from 'react';
import { getAllComments } from '../../../services/apiConfig.js';
import { useState, useEffect } from 'react';

export default function Reviews(props) {

  const [comments, setComments] = useState([]);
  // const [avatar, setAvatar] = useState([]);
  useEffect(() => {
    const grabComments = async () => {
      const fetchComments = await getAllComments()
      setComments(fetchComments.data)
      // console.log(fetchComments.data[0].comments);
      // setAvatar(fetchComments)
      // console.log(fetchComments.data)
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
                <div>
                  TEST 2
                  <p>
                    test
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
