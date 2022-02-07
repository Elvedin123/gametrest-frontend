import { getAllComments } from '../../../services/apiConfig.js';
import { useState, useEffect } from 'react';
import DeleteComment from '../Comments/DeleteComment.jsx';
import reviewcss from './Reviews.module.css';


export default function Reviews(props) {

  const [comments, setComments] = useState([]);
  // const [avatar, setAvatar] = useState([]);
  useEffect(() => {

    grabComments()
  }, [comments])


  useEffect(() => {

    grabComments()
  }, [])

  const grabComments = async () => {
    const fetchComments = await getAllComments()
    setComments(fetchComments.data)
    console.log(fetchComments.data)
    // setAvatar(fetchComments)

  }

  const id = localStorage.getItem("id")

  return (
    <div className={reviewcss.reviewbox}>
      <div className={reviewcss.review}>

        {comments.map((comment) => {
          return (
            comment.comments.map((review) => {

              // console.log(review.game)
              if (Number(review.game) === props.gameId) {
                return (

                  <div key={review._id} >

                    <p>
                      {review.comment}
                    </p>

                    <div>{comment._id === id ? <div>

                      <DeleteComment
                        // handleToggle={handleToggle}
                        setComments={setComments}
                        grabComments={grabComments}
                        comment={review._id}
                      /> </div> : ""}</div>

                  </div>

                )
              }

            })
          )

        })}
      </div>
    </div>
  );
}
