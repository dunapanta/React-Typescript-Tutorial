import axios from 'axios'

// Centralizar la logica de las peticiones
export const reqResApi = axios.create({
    baseURL: 'https://reqres.in/api'
})