import { api, api2 } from "../axios";

export const getSurahs = () => api.get('/surah').then(res => res.data)

