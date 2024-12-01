import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.alquran.cloud/v1'
})


export const api2 = axios.create({
    baseURL: 'https://api.aladhan.com/v1/timingsByAddress'
})



