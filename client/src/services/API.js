import axios from 'axios'
const url='http://localhost:5000/api/v1'
const API = axios.create({baseURL:url})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('token')){
        req.headers.Authorization=`Bearer ${localStorage.getItem('token')}`
      }
      return req;
})
export default API