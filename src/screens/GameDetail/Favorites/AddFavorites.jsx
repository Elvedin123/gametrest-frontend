import { addFavorite } from "../../../services/apiConfig";
import favbuttoncss from './AddFavorite.module.css';
import { useNavigate } from "react-router-dom";
import { useStateIfMounted } from "use-state-if-mounted";
export default function Favorites(props) {
  const navigate = useNavigate();
  const newFavorite = {
    gameId: props.gameId,
    name: props.gameName,
    image: props.gameImg
  };

  const [favorite, setFavorite] = useStateIfMounted(newFavorite);
  const userId = localStorage.getItem('id');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFavorite(newFavorite);
    await addFavorite(favorite, userId);
    navigate("/profile");
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
};
