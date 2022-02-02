import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout.jsx';

export default function GameDetail() {
  const [game, setGames] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchGame = async () => {
      const game = await getGame(id);
      setGames(game);
      setLoaded(true);
    }
    fetchGame();
  }, [])

  if (!isLoaded) {
    return <h1>Spawning...</h1>
  }

  return (
    <Layout>
      <div>

      </div>
    </Layout>
  )
}
