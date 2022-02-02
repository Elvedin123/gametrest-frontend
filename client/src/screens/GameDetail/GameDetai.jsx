import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function GameDetai() {
  const [game, setGames] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchGame = async () => {
      const game = await getGame(id)
      setGames(game)
      setLoaded(true)
    }
    fetchGame();
  })

  return <div>Hello World</div>;
}
