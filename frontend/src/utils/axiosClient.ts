import axios from "axios"

const axiosClient=axios.create({
    baseURL:`http://localhost:3000`,
    withCredentials:true,
    headers:{
        'Content-Type':'application/json'
    }
});

export default axiosClient;