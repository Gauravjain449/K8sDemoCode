import axios from 'axios';

const BASE_URL = "/api";

const mongoInstance = axios.create({
    baseURL: BASE_URL
})

export default mongoInstance;