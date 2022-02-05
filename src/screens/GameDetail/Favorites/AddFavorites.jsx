import { useState } from "react";
import { addFavorite } from "../../../services/apiConfig";
import favbuttoncss from './AddFavorite.module.css'
import { useNavigate } from "react-router-dom";
export default function Favorites(props) {
  const navigate = useNavigate()
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
    navigate("/profile")
  }

  return (
    <div>
      <button
        className={favbuttoncss.fav_button}
        onClick={(e) => { handleSubmit(e) }}
      >Add to Favorites</button>

      <button ></button>
    </div>
  );
}
