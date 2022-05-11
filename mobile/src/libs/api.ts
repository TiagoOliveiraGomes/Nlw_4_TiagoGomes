import axios from 'axios'

export const api = axios.create({
    baseURL: "https://nlw1servertiagogomes-production.up.railway.app"
})

//url: 192.168.0.106