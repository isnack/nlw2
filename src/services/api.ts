import axios from 'axios'

const api = axios.create({
    baseURL:"https://proffy-deploy-isnack.herokuapp.com/",
})

export default api