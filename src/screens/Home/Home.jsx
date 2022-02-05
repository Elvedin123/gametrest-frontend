import homepagecss from './Home.module.css'
import Layout from '../../components/Layout/Layout.jsx'
import { useState, useEffect } from "react";
import { fetchGames } from "../../services/gamesApi.js";

import { Link } from 'react-router-dom';

import Cards from '../../components/Cards/Cards';
import Header from '../../Header/Header';



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
    <Layout>
      <Header
        title="Red Dead Redemption 2"
      />
      <h3 className={homepagecss.title} >Hot Games</h3>
      <div className={homepagecss.home}>

        {games.map((game) => {

          return (
            <Link className={homepagecss.title_test} key={game.id} to={`/games/${game.id}`}>
              <div>
                <Cards
                  imageURL={game.background_image}
                  title={game.name}
                />
              </div>
            </Link>

          )
        })}
      </div>
    </Layout>
  )
}

export default Home