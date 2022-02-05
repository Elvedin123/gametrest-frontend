import axios from 'axios'

const devProxy = 'https://secure-citadel-62036.herokuapp.com/'
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


const id = localStorage.getItem('id')
export const verifyUser = (props) =>

  axios({
    method: 'get',
    url: `${apiUrls.production}/users/${id}`,
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
    url: `${apiUrls.production}/logout`
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
    url: `${apiUrls.production}/favorite/${userId}`,
    headers: { authorization: `${token}` },
    data: favorite
  })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      console.log(error)
    })

// Getting the Comments
// const token = localStorage.getItem('token')

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

// For Editing user comments THIS COULD BE WRONG, IDK - Hampton
export const editUserComments = (comment, userId) => {
  axios({
    method: "put",
    url: `${apiUrls.production}/users/comments/${userId}`,
    data: comment
  })
    .then((res) => {
      return res.data

    })
    .catch((error) => {
      console.log(error)
    })
}

//For Deleting user comments THIS COULD BE WRONG, IDK - Hampton
export const deleteUserComments = (comment, userId) => {
  axios({
    method: "delete",
    url: `${apiUrls.production}/users/comments/${userId}`,
    data: comment
  })
    .then((res) => {
      return res.data

    })
    .catch((error) => {
      console.log(error)
    })
}