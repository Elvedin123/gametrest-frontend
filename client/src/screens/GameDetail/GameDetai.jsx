import React from 'react';
import { useParams } from 'react-router-dom';

export default function GameDetai() {
  const [games, setGames] = useState(null);
  const { id } = useParams


  return <div>Hello World</div>;
}
