import axios from "axios";

export const fetchData = async (path) => {
    console.log("kontrol")
    const response = await axios.get(`${path}`)
    return response?.data;
}