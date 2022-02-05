import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout.jsx';
// import { EditComment } from './EditComment'
// import { CommentForm } from './CommentForm'
// import { DeleteComment } from './DeleteComment' 
import Favorites from './Favorites/AddFavorites.jsx';

import { getGames } from '../../services/gamesApi.js';
import CommentForm from './Comments/CommentForm.jsx';
import gamesdetailcss from './GameDetail.module.css'

export default function GameDetail() {
  const [games, setGames] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchGames = async () => {
      const game = await getGames(id); //whatever is from the backend. 
      setGames(game);
      setLoaded(true);
    }
    fetchGames();
  }, [id])

  console.log(games)

  if (!isLoaded) {
    return <h1>Spawning...</h1>
  }

  return (
    <Layout>
      <div className={gamesdetailcss.game_container}>
        <div className={gamesdetailcss.image_container}>
          <img className={gamesdetailcss.image} src={games.background_image} alt={games.name} />
        </div>

        <div className={gamesdetailcss.detail_container}>
          <h1 className={gamesdetailcss.game_name}>{games.name}</h1>
          <div className={gamesdetailcss.games_details}>
            <div className={gamesdetailcss.genre}>
              <h2>Genre:</h2>
              {games.genres.map((genre) => {
                return (
                  <p key={genre.id}> {genre.name}</p>
                )
              })}
            </div>
            <h3>
              Description
            </h3>
            <p>{games.description_raw}</p>

          </div>
          <h1 className={gamesdetailcss.reviews}>Reviews</h1>
          <div className={gamesdetailcss.review_section}>
            {            //backend comments
            }          </div>
        </div>
      </div>
      <div className={gamesdetailcss.comment_section}>
        <CommentForm />
        <Favorites
          gameId={games.id}
          gameName={games.name}
          gameImg={games.background_image}
        />
      </div>

    </Layout>
  )
}
