import React, { useState, useEffect } from "react";
import { Container, Text, LoadingContainer, MoviesList } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ActivityIndicator, ScrollView } from "react-native";
import { searchMovies } from "../../services/api";
import SearchItem from "../../components/SearchItem";

// import { Container } from './styles';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    let isActive = true;
    async function getSearch() {
      const movies = await searchMovies(route.params?.name);
      if (isActive) {
        setMovies(movies);
        setLoading(false);
      }
    }

    if (isActive) {
      getSearch();
    }

    return () => {
      isActive = false;
    };
  }, []);

  const navigateToDetailsPage = (id) => {
    navigation.navigate("Detail", { id: id });
  };

  if (loading) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="#fff" />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <MoviesList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        data={movies}
        renderItem={({ item }) => (
          <SearchItem
            data={item}
            navigateToDetailsPage={navigateToDetailsPage}
          />
        )}
      />
    </Container>
  );
};

export default Search;
