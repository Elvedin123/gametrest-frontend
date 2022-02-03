import './Home.module.css'
import Layout from '../../components/Layout/Layout.jsx'
import { useState, useEffect } from "react";
import { fetchGames } from "../../services/gamesApi.js";


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
            <div key={game.id}>
              <img src={game.background_image} alt={game.name} />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Home