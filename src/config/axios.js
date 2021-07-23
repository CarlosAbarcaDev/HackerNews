import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://hn.algolia.com/api/v1/'
})

export default axiosClient



