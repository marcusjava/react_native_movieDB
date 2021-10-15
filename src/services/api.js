import axios from "axios";
import { MOVIEDB_API_KEY } from "react-native-dotenv";

const api = axios.create({ baseURL: "https://api.themoviedb.org/3" });

export const key = MOVIEDB_API_KEY;

export const searchMovies = async (term) => {
  const response = await api.get("/search/movie", {
    params: {
      api_key: key,
      query: term,
      language: "pt-BR",
      page: 1,
    },
  });

  return response.data.results;
};

export const getMovieById = async (id) => {
  try {
    let response = await api.get(`/movie/${id}`, {
      params: {
        api_key: key,
        language: "pt-BR",
      },
    });
    return response.data;
  } catch (error) {
    return error.messsage;
  }
};

export default api;
