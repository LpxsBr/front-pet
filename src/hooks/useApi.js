import axios from 'axios';

const link = "http://localhost:8080"
const api = axios.create({
  baseURL: link
})

export default api