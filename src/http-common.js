import axios from "axios";
let token = JSON.parse(localStorage.getItem("token"));
export default axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "Content-type": "application/json",
    "accept": "application/json",
    "Authorization": "Baerer " + token,
  }
});