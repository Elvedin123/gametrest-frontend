import cardscss from "./Cards.module.css";

export default function Cards(props) {
  const { imageURL, title } = props;

  return (
    <div className={cardscss.card_container}>
      <div className={cardscss.card_content} >
        {/* Leaving this in case we want to revist and add a like feature */}
        {/* <button className={cardscss.like_button} >Like</button> */}
        <div className={cardscss.image_container}>
          <img className={cardscss.game_image} src={imageURL} alt='' />
        </div>
        <div className={cardscss.title_container}>
          <h3>{title}</h3>
        </div>
        {/* Leaving this in case we want to revist and add a like feature */}
        {/* <div className={cardscss.ratings_container}>
          <p>{ratings}</p>
        </div> */}
        {/* <div className={cardscss.button_container}>
          <Link className='card-button' to={route}><button>Click Here</button></Link>
        </div> */}
      </div>
    </div>
  );
};
