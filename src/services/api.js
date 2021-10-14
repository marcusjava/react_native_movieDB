import axios from "axios";

const api = axios.create({ baseURL: "https://api.themoviedb.org/3" });

export const key = "c70894f2d6fca4a9863f576a7a9e0785";

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
