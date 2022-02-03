import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout.jsx';
// import { EditComment } from './EditComment'
// import { CommentForm } from './CommentForm'
// import { DeleteComment } from './DeleteComment' 
import { getGames } from '../../services/gamesApi.js'
// import { Layout } from '../../components/Layout/Layout.jsx'

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
  }, [])

  console.log(games)

  if (!isLoaded) {
    return <h1>Spawning...</h1>
  }

  return (
    <Layout>
      <div className="game-container">
        <div className="image">
          <img src={games.background_image} alt={games.name} />
        </div>

        <div className="detail-container">
          <h1>{games.name}</h1>
          <div className="games-details">
            <h3>
              Description
            </h3>
            <p>{games.description_raw}</p>
            <h2>Genre</h2>
            {games.genres.map((genre) => {
              return (
                <p>{genre.name}</p>
              )
            })}
          </div>
          <h1>Reviews</h1>
          <div className="Comment-section">
            //backend comments
          </div>
        </div>
      </div>

    </Layout>
  )
}
