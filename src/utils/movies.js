export const getListMovies = (size, movies) => {
  /*  let newMovies = [];

  for (let i = 0, l = size; i < l; i++) {
    newMovies.push(movies[i]);
  } */

  return movies.slice(0, size);
};

export const randomBanner = (movies) => {
  const idx = Math.floor(Math.random() * movies.length);
  return movies[idx];
};
