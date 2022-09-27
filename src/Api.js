import axios from "axios";

const apiMovies = axios.create({
  baseURL: "http://localhost:3001/movies",
});

export default apiMovies;
