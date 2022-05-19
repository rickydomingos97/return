import axios from "axios";

export const api = axios.create({
   // baseURL: 'http://localhost:3333/' before
   baseURL: import.meta.env.VITE_API_URL, // restart server after changes .env
})