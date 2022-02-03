import homepagecss from './Home.module.css'
import Layout from '../../components/Layout/Layout.jsx'
import { useState, useEffect } from "react";
import { fetchGames } from "../../services/gamesApi.js";
import Cards from '../../components/Cards/Cards';


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

      <div className={homepagecss.home}>
        {games.results}
        {games.map((game) => {
          return (
            <div key={game.id}>
              <Cards
                imageURL={game.background_image}
                title={game.name}
                genre={game.genre}
              />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Home