import React, { useEffect, useState } from "react";
import FavoriteItem from "../../components/FavoriteItem";
import { getMoviesFromLS, deleteMovieFromLS } from "../../utils/storage";
import Header from "../../components/Header";
import { useNavigation, useIsFocused } from "@react-navigation/native";

import { Container, Favorites } from "./styles";

function Movies() {
  const [favorites, setFavorites] = useState([]);

  const focused = useIsFocused();

  useEffect(() => {
    async function getFavorites() {
      const favoritesFromLS = await getMoviesFromLS();
      setFavorites(favoritesFromLS);
    }
    getFavorites();
  }, [focused]);

  const deleteMovie = async (id) => {
    const newFavorites = await deleteMovieFromLS(id);
    setFavorites(newFavorites);
  };

  const navigation = useNavigation();

  const navigateToDetailsPage = (id) => {
    navigation.navigate("Detail", { id: id });
  };

  return (
    <Container>
      <Header title="Meus Filmes" />
      <Favorites
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={favorites}
        renderItem={({ item }) => (
          <FavoriteItem
            item={item}
            deleteMovie={(id) => deleteMovie(id)}
            goToDetail={(id) => navigateToDetailsPage(id)}
          />
        )}
        keyExtractor={(item) => String(item.id)}
      />
    </Container>
  );
}

export default Movies;
