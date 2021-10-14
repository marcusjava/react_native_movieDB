import AsyncStorage from "@react-native-async-storage/async-storage";

export const getMoviesFromLS = async () => {
  const movies = await AsyncStorage.getItem("@movieDB");
  return JSON.parse(movies) || [];
};

export const saveMovieToLS = async (movie) => {
  const movies = await getMoviesFromLS("@movieDB");
  const hasMovie = movies.some((item) => item.id === movie.id);
  if (hasMovie) {
    console.log("Esse filme já se encontra na sua lista");
    return;
  }
  movies.push(movie);
  await AsyncStorage.setItem("@movieDB", JSON.stringify(movies));
};

export const deleteMovieFromLS = async (id) => {
  const movies = await getMoviesFromLS("@movieDB");
  const newMovies = movies.filter((m) => m.id !== id);
  await AsyncStorage.setItem("@movieDB", JSON.stringify(newMovies));
  return newMovies;
};

export const hasMovie = async (id) => {
  const movies = await getMoviesFromLS("@movieDB");
  return movies.find((item) => item.id === id);
};
