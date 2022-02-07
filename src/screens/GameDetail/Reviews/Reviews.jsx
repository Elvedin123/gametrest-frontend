
import { getAllComments } from '../../../services/apiConfig.js';
import { useState, useEffect } from 'react';
import EditComment from '../Comments/EditComment.jsx';
import DeleteComment from '../Comments/DeleteComment.jsx';
import reviewcss from './Reviews.module.css'
export default function Reviews(props) {

  const [comments, setComments] = useState([]);
  // const [toggle, setToggle] = useState(true);
  // const [avatar, setAvatar] = useState([]);
  useEffect(() => {
    const grabComments = async () => {
      const fetchComments = await getAllComments()
      setComments(fetchComments.data)
      console.log(fetchComments.data)
      // setAvatar(fetchComments)

    }
    grabComments()
  }, [])

  // const handleToggle = () => {
  //   setToggle(!toggle);
  // }

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

                    <div>{comment._id === id ? <div>  <EditComment
                    // handleToggle={handleToggle}
                    />
                      <DeleteComment
                        // handleToggle={handleToggle}
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
