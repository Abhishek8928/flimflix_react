

import axios from "axios";
import {API_BASE_URL,API_HEADER_OPTIONS} from "./constant"

// default configuration
const axiosInstances = axios.create({
    baseURL: API_BASE_URL,
    headers:API_HEADER_OPTIONS.headers
})

export default axiosInstances;