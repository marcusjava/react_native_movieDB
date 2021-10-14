import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  Header,
  HeaderButton,
  Banner,
  ButtonLink,
  ContentArea,
  Genres,
  Description,
  Stats,
} from "./styles";
import { ScrollView, Modal } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getMovieById } from "../../services/api";
import Stars from "react-native-stars";
import Tag from "../../components/Tag";
import ModalLink from "../../components/ModalLink";
import {
  saveMovieToLS,
  hasMovie,
  deleteMovieFromLS,
} from "../../utils/storage";

function Detail() {
  const [movie, setMovie] = useState({});
  const [visible, setVisible] = useState(false);
  const [favoriteMovie, setFavoriteMovie] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    let isActive = true;

    async function getMovie() {
      const data = await getMovieById(route.params?.id);

      if (isActive) {
        setMovie(data);
        const isFavorite = await hasMovie(data.id);
        setFavoriteMovie(isFavorite);
      }
    }

    if (isActive) {
      getMovie();
    }

    return () => {
      isActive = false;
    };
  }, []);

  const favorite = async (movie) => {
    if (favoriteMovie) {
      await deleteMovieFromLS(movie.id);
      setFavoriteMovie(false);
      return;
    }
    await saveMovieToLS(movie);
    setFavoriteMovie(true);
  };

  return (
    <Container>
      <Header>
        <HeaderButton activeOpacity={0.7} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={28} color="#fff" />
        </HeaderButton>
        <HeaderButton activeOpacity={0.7} onPress={() => favorite(movie)}>
          <Ionicons
            name={favoriteMovie ? "bookmark" : "bookmark-outline"}
            size={28}
            color="#fff"
          />
        </HeaderButton>
      </Header>
      <Banner
        resizeMethod="resize"
        source={{
          uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        }}
      />
      <ButtonLink onPress={() => setVisible(true)}>
        <Feather name="link" size={24} color="#fff" />
      </ButtonLink>
      <Title numberOfLines={2}>{movie.title}</Title>

      <ContentArea>
        <Stars
          default={movie.vote_average}
          count={10}
          half={true}
          starSize={20}
          fullStar={<Ionicons name="md-star" size={24} color="#e7a74e" />}
          emptyStar={
            <Ionicons name="md-star-outline" size={24} color="#e7a74e" />
          }
          halfStar={<Ionicons name="md-star-half" size={24} color="#e7a74e" />}
          disabled={true}
        />
        <Stats>{movie.vote_average}/10</Stats>
      </ContentArea>
      <Genres
        data={movie?.genres}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Tag name={item.name} />}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Descrição</Title>
        <Description>{movie?.overview}</Description>
      </ScrollView>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <ModalLink
          link={movie?.homepage}
          closeModal={() => setVisible(false)}
          title={movie?.title}
        />
      </Modal>
    </Container>
  );
}

export default Detail;
