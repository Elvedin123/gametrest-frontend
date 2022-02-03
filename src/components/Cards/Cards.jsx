import React from 'react'
// import { Link } from 'react-router-dom';
import cardscss from "./Cards.module.css";


export default function Cards(props) {
  const { imageURL, title, genre } = props;

  return (
    <div className={cardscss.card_container}>
      <div className={cardscss.card_content} >
        <div className={cardscss.image_container}>
          <img className={cardscss.game_image} src={imageURL} alt='' />
        </div>
        <div className={cardscss.title_container}>
          <h3>{title}</h3>
        </div>
        <div className={cardscss.genre_container}>
          <p>{genre}</p>
        </div>
        {/* <div className={cardscss.ratings_container}>
          <p>{ratings}</p>
        </div> */}
        {/* <div className={cardscss.button_container}>
          <Link className='card-button' to={route}><button>Click Here</button></Link>
        </div> */}
        <div />
      </div>
    </div>

  )
}
