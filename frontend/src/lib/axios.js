import axios from "axios";
import axios0 from "axios";

const api = axios.create({
    baseURL: "http://localhost:5001/api",
});

export default api;