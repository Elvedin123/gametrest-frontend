import { getAllComments } from '../../../services/apiConfig.js';
import { useEffect } from 'react';
import DeleteComment from '../Comments/DeleteComment.jsx';
import reviewcss from './Reviews.module.css';
import { useStateIfMounted } from 'use-state-if-mounted';

export default function Reviews(props) {
  const [comments, setComments] = useStateIfMounted([]);
  useEffect(() => {
    const grabComments = async () => {
      const fetchComments = await getAllComments();
      setComments(fetchComments.data);
    }
    grabComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const id = localStorage.getItem("id");

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

                    <p className={reviewcss.review_container}>
                      <img className={reviewcss.avatar_icon} src={comment.avatar} alt={comment.userName} />

                      {review.comment}
                    </p>

                    <div>{comment._id === id ? <div>

                      <DeleteComment
                        setComments={setComments}
                        comment={review._id}
                      /> </div> : ""}</div>

                  </div>

                );
              };

            })
          );

        })};
      </div>
    </div>
  );
};
