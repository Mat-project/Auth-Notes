import axios from "axios";
import { ACCESS_TOKENS } from "./constants";

const api =axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl
})

api.interceptors.request.use(
    (config)=>{
        const token =localStorage.getItem(ACCESS_TOKENS);
        if (token){
            config.headers.Authorization =`Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

export default api