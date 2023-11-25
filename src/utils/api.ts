/* eslint-disable */
import axios from "axios"
import Auth from "./auth"

export const base_url = import.meta.env.VITE_APP_BASE_URL

const Api = axios.create({
  baseURL: base_url,
})

Api.interceptors.request.use(
  (config) => {
    if (Auth.isAuthenticated()) {
      config.headers["Authorization"] = `Bearer ${Auth.getToken()}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default Api
