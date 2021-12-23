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
export const getRestaurant = (id) => API.get(`/${ id }`)
export const updateRestaurant = (id, obj) => API.put(`/${ id }`, obj)
export const addReview = (id, obj) => API.post(`/${ id }/add-review`, obj)