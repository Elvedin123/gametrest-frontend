import { getFavorites } from "../../services/apiConfig.js"
import { useEffect, useState } from "react"
import Userfavoritescss from "./Userfavorites.module.css"
import DeleteFavorite from "./DeleteFavorite.jsx"


export default function Userfavorites() {
  const [favorites, setFavorites] = useState([])
  const userid = localStorage.getItem("id")
  useEffect(() => {
    const displayFavs = async () => {

      const showFavs = await getFavorites(userid)
      setFavorites(showFavs.data)
      console.log(showFavs.data);
    }
    displayFavs()
  }, [userid])
  return (
    <div className={Userfavoritescss.favorites_container} >
      {favorites.map((favorite) => {
        return (
          <div className={Userfavoritescss.favorites_card} key={favorite._id}>
            <h3>{favorite.name}</h3>
            <img src={favorite.image} alt={favorite.name} />
            <DeleteFavorite


              favid={favorite._id} />
          </div>
        )
      })}
    </div>
  );
}
