import axios from 'axios'

const devProxy = 'https://secure-citadel-62036.herokuapp.com/'
const apiUrls = {

  production: 'https://gameterest-backend.herokuapp.com/api',
  development: 'http://localhost:3000/api'
}

export const createUser = (props) =>
  axios({
    method: 'post',
    url: `${devProxy}${apiUrls.production}/signup`,
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
    url: `${devProxy}${apiUrls.production}/login`,
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
    url: `${devProxy}${apiUrls.production}/logout`,
    data: props
  })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      console.log(error)
    })


const id = localStorage.getItem('id')
export const verifyUser = (props) =>

  axios({
    method: 'get',
    url: `${devProxy}${apiUrls.production}/users/${id}`,
    data: props
  })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      console.log(error)
    })




export const logoutUser = () =>
  axios({
    method: 'get',
    url: `${devProxy}${apiUrls.production}/logout`
  })

    .then((res) => {
      return res.data
    })
    .catch((error) => {
      console.log(error)
    })

const token = localStorage.getItem('token')
export const addComment = (comment, userId) =>
  axios({
    method: "post",
    url: `${devProxy}${apiUrls.production}/comment/${userId}`,
    headers: { authorization: `${token}` },
    data: comment
  })
    .then((res) => {
      return res.data

    })
    .catch((error) => {
      console.log(error)
    })



export const addFavorite = (favorite, userId) =>
  axios({
    method: "post",
    url: `${devProxy}${apiUrls.production}/favorite/${userId}`,
    headers: { authorization: `${token}` },
    data: favorite
  })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      console.log(error)
    })

<<<<<<< HEAD
export const getFavorites = (userId) =>
  axios({
    method: 'get',
    url: `${devProxy}${apiUrls.production}/user/favorites/${userId}`,
  })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      console.log(error)
    })


// Getting the Comments
// const token = localStorage.getItem('token')
=======
>>>>>>> 3330d189d45c94ebd31d87e6d441ce9eba980b63

//Fetching all users
export const getAllComments = () =>
  axios({
    method: "get",
    url: `${devProxy}${apiUrls.production}/users`,
  })
    .then((res) => {
      return res.data

    })
    .catch((error) => {
      console.log(error)
    })

// /update/comment/:userid/:id  <---- This the route (line 32 routes/users.js)  
// For Editing user comments 
export const editUserComments = (comment, userId, id) => {
  axios({
    method: "put",
    url: `${devProxy}${apiUrls.production}/update/comment/${userId}/${id}`,
    headers: { authorization: `${token}` },
    data: comment
  })
    .then((res) => {
      return res.data

    })
    .catch((error) => {
      console.log(error)
    })
}

// /delete/:userid/:id  <---- This the route (line 30 routes/users.js)
//For Deleting user comments 
export const deleteUserComments = (userid, id) => {
  axios({
    method: "delete",
    url: `${devProxy}${apiUrls.production}/delete/${userid}/${id}`,
    headers: { authorization: `${token}` },
  })
    .then((res) => {
      return res.data

    })
    .catch((error) => {
      console.log(error)
    })
}

// FOR FETCHNIG USER FAVORITE GAMES
export const getUserFavorites = (userId) => {
  axios({
    method: "get",
    url: `${devProxy}${apiUrls.production}/users/favorites/${userId}`,
  })
    .then((res) => {
      return res.data

    })
    .catch((error) => {
      console.log(error)
    })
}