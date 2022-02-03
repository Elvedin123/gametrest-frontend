import axios from 'axios'
// import "dotenv/config"
// const KEY = process.env.REACT_APP_KEY
const gameUrl = {

  production: `https://api.rawg.io/api/games`,
  development: 'http://localhost:3000/api'
}
// const api = axios.create({
//   baseURL: gameUrl.production,
//   headers: {
//     "Authorization": "Bearer 234f3043425540a7b93ddd79611cd0d0"

//   }
// })

export const fetchGames = () =>
  axios({
    method: 'get',
    url: `${gameUrl.production}?key=234f3043425540a7b93ddd79611cd0d0`,
    headers: {
      "Authorization": `Bearer 234f3043425540a7b93ddd79611cd0d0`

    }

  }).then((res) => {
    return res.data
  })
    .catch((error) => {
      console.log(error)
    })
