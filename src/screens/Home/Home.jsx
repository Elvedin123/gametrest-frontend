import './Home.module.css'
import Layout from '../../components/Layout/Layout.jsx'
import { useState, useEffect } from "react";
import { fetchGames } from "../../services/gamesApi.js";
import { Link } from 'react-router-dom';


const Home = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const allGames = async () => {
      const everyGame = await fetchGames();
      setGames(everyGame.results)
      console.log(everyGame.results);
    }
    allGames();
  }, [])
  // console.log(games);
  return (
    <Layout >
      <div className='home'>
        {/* {games.results} */}
        {games.slice(0, 40).map((game) => {

          return (
            <Link to={`/games/${game.id}`}>
              <div key={game.id}>
                <img src={game.background_image} alt={game.name} />
              </div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default Home