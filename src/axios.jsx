import axios from "axios";
const token = JSON.parse(localStorage.getItem("adminProfile"))?.token;



export const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    SECRET_KEY: import.meta.env.VITE_BASE_URL_SECRET_KEY,
    PUBLISH_KEY: import.meta.env.VITE_BASE_URL_PUBLISH_KEY,
    'Authorization': `Bearer ${token}`
  },
}); 


