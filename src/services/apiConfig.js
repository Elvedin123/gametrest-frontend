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

// export const createComment = (props) => 
// axios({
//   method: 'post',
//   url: `${devProxy}${apiUrls.production}/signup`,
//   data: props,
// })
//   .then((res) => {
//     return res.data
//   })
//   .catch((error) => {
//     console.log(error)
//   })

export const verifyUser = (props) =>
  axios({
    method: 'get',
    url: `${apiUrls.production}/`,
    data: props
  })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      console.log(error)
    })


// export const verifyUser = async () => {
//   const token = localStorage.getItem('token')
//   if (token) {
//     const res = await axios.get('/verify')
//     return res.data
//   }
//   return false
// }