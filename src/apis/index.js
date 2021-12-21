import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000/api/v1/restaurants' })

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('NAME')) {
//         req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('NAME')).token}`
//     }
//     return req
// })

export const getAllRestaurants = () => API.get('/')
export const postRestaurant = (obj) => API.post('/', obj)
export const deleteRestaurant = (id) => API.delete(`/${ id }`)