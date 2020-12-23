import axios from "axios";

export const fetchData = async (path) => {
    const response = await axios.get(`${path}`)
    return response?.data;
}