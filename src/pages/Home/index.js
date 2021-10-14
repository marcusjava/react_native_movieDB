import React, { useState, useEffect } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import {
  Container,
  Title,
  BannerButton,
  Banner,
  SliderMovie,
  LoadingContainer,
} from "./styles";
import Header from "../../components/Header";
import Search from "../../components/Search";
import SliderItem from "../../components/SliderItem";
import api, { key } from "../../services/api";
import { getListMovies, randomBanner } from "../../utils/movies";
import { useNavigation } from "@react-navigation/native";

// import { Container } from './styles';

function Home() {
  const [nowMovies, setNowMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [banner, setBanner] = useState({});
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    let isActive = true;
    const ac = new AbortController();
    async function getMovies() {
      const [nowData, popularData, topRatedData] = await Promise.all([
        api.get(`/movie/now_playing?api_key=${key}&language=pt-BR&page=1`),
        api.get(`/movie/popular?api_key=${key}&language=pt-BR&page=1`),
        api.get(`/movie/top_rated?api_key=${key}&language=pt-BR&page=1`),
      ]);
      if (isActive) {
        setNowMovies(getListMovies(5, nowData.data.results));
        setBanner(randomBanner(getListMovies(5, nowData.data.results)));
        setPopularMovies(getListMovies(5, popularData.data.results));
        setTopMovies(getListMovies(5, topRatedData.data.results));
        setLoading(false);
      }
    }
    getMovies();

    return () => {
      isActive = false;
      ac.abort();
    };
  }, []);

  const navigateToDetailsPage = (id) => {
    navigation.navigate("Detail", { id: id });
  };

  if (loading) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="#FFF" />
      </LoadingContainer>
    );
  }
  return (
    <Container>
      <Header title="React Prime" />
      <Search />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Em cartaz</Title>
        <BannerButton
          activeOpacity={0.5}
          onPress={() => navigateToDetailsPage(banner.id)}
        >
          <Banner
            resizeMethod="resize"
            source={{
              uri: `https://image.tmdb.org/t/p/original${banner.poster_path}`,
            }}
          />
        </BannerButton>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={nowMovies}
          renderItem={({ item }) => (
            <SliderItem
              item={item}
              navigateToDetailsPage={navigateToDetailsPage}
            />
          )}
          keyExtractor={(item) => String(item.id)}
        />

        <Title>Populares</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={popularMovies}
          renderItem={({ item }) => (
            <SliderItem
              item={item}
              navigateToDetailsPage={navigateToDetailsPage}
            />
          )}
          keyExtractor={(item) => String(item.id)}
        />
        <Title>Top Filmes</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={topMovies}
          renderItem={({ item }) => (
            <SliderItem
              item={item}
              navigateToDetailsPage={navigateToDetailsPage}
            />
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </ScrollView>
    </Container>
  );
}

export default Home;
