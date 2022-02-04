import { useState } from "react";
import { addFavorite } from "../../../services/apiConfig";

export default function Favorites(props) {

  const newFavorite = {
    gameId: props.gameId,
    name: props.gameName,
    image: props.gameImg
  }

  const [favorite, setFavorite] = useState(newFavorite)
  const userId = localStorage.getItem('id')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFavorite(newFavorite)
    await addFavorite(favorite, userId)
    console.log(favorite)
  }

  return (
  <div>
    <button onClick={(e) => {handleSubmit(e)}}>Add to Favorites</button>
  </div>
  );
}
