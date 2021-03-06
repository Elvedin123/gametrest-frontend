import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY
const gameUrl = {

  production: `https://api.rawg.io/api/games`,
  development: 'http://localhost:3000/api'
};

export const fetchGames = () =>
  axios({
    method: 'get',
    url: `${gameUrl.production}?key=${API_KEY}`,
    headers: {
      "Authorization": `Bearer ${API_KEY}`
    }

  }).then((res) => {
    return res.data
  })
    .catch((error) => {
      console.log(error)
    });

export const getGames = (props) =>
  axios({
    method: 'get',
    url: `${gameUrl.production}/${props}?key=${API_KEY}`,
    headers: {
      "Authorization": `Bearer ${API_KEY}`
    }

  }).then((res) => {
    return res.data
  })
    .catch((error) => {
      console.log(error)
    });