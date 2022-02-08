import { getAllComments } from '../../../services/apiConfig.js';
import { useEffect, useState } from 'react';
import DeleteComment from '../Comments/DeleteComment.jsx';
import reviewcss from './Reviews.module.css';


export default function Reviews(props) {

  const [comments, setComments] = useState([]);
  // const [avatar, setAvatar] = useState([]);
  useEffect(() => {
    const grabComments = async () => {
      const fetchComments = await getAllComments()
      setComments(fetchComments.data)
      // console.log(fetchComments.data)
      // setAvatar(fetchComments)
  
    }
    grabComments()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const id = localStorage.getItem("id")

  return (
    <div className={reviewcss.reviewbox}>
      <div className={reviewcss.review}>

        {comments.map((comment) => {
          return (
            // eslint-disable-next-line array-callback-return
            comment.comments.map((review) => {
              if (Number(review.game) === props.gameId) {
                return (

                  <div className={reviewcss.display_reviews} key={review._id} >
                    <p>
                      <img className={reviewcss.avatar_icon} src={comment.avatar} alt={comment.userName} />

                      {review.comment}
                    </p>

                    <div>{comment._id === id ? <div>

                      <DeleteComment
                        // handleToggle={handleToggle}
                        setComments={setComments}
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
