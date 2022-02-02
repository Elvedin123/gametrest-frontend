

import axios from 'axios'


const apiUrls = {
  production: 'https://gameterest-backend.herokuapp.com/api',
  development: 'http://localhost:3000/api'
}

export const createUser = (props) => 
  axios({
    method: 'post',
    url: `${apiUrls.production}/signup`,
    data: props,
  })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      console.log(error)
    })

export const loginUser = (props) => 
  axios({
    method: 'post',
    url: `${apiUrls.production}/login`,
    data: props,
  })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      console.log(error)
    })

export const logout = (props) => 
  axios({
    method: 'get',
    url: `${apiUrls.production}/logout`,
    data: props
  })
  .then((res) => {
    return res.data
  })
  .catch((error) => {
    console.log(error)
  })