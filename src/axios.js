import axios from "axios";

//makes requests
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
