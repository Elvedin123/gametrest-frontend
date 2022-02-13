import { getFavorites } from "../../services/apiConfig.js";
import { useEffect } from "react";
import Userfavoritescss from "./Userfavorites.module.css";
import DeleteFavorite from "./DeleteFavorite.jsx";
import { useStateIfMounted } from "use-state-if-mounted";
import { Link } from 'react-router-dom';

export default function Userfavorites() {
  const [favorites, setFavorites] = useStateIfMounted([]);
  const userid = localStorage.getItem("id");

  useEffect(() => {
    const displayFavs = async () => {
      const showFavs = await getFavorites(userid);
      setFavorites(showFavs.data);
      console.log(showFavs.data)
    }
    displayFavs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={Userfavoritescss.favorites_container} >
      {favorites.map((favorite) => {
        return (
          <div className={Userfavoritescss.favorites_card} key={favorite._id}>
            <Link to={`games/${favorite.gameId}`}>
              <h3>{favorite.name}</h3>
              <img className={Userfavoritescss.image} src={favorite.image} alt={favorite.name} />
            </Link>
            <DeleteFavorite


              favid={favorite._id} />
          </div>
        );
      })};
    </div>
  );
};
