import axios from "axios";
const BASE_URL = "http://192.168.88.3:1337/api"

export const axiosNormal = axios.create({baseURL:BASE_URL})

export const axiosPrivate = axios.create({
    baseURL:BASE_URL,
    headers:{'Content-Type': 'application/json'},
    withCredentials:true
})