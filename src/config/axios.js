import axios from 'axios'

export default axios.create({
  baseURL: `https://ceppa-api.vercel.app/`,
  //baseURL: `http://localhost:3001/`,
})
