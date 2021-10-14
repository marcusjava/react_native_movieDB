import React from "react";
import { Container, Title, Image, StatsContainer, Stats } from "./styles";
import { Ionicons } from "@expo/vector-icons";

// import { Container } from './styles';

function SliderItem({
  item: { id, title, poster_path, vote_average },
  navigateToDetailsPage,
}) {
  return (
    <Container activeOpacity={0.8} onPress={() => navigateToDetailsPage(id)}>
      <Image
        resizemethod="resize"
        source={{
          uri: `https://image.tmdb.org/t/p/original${poster_path}`,
        }}
      />
      <Title numberOfLines={1}>{title}</Title>
      <StatsContainer>
        <Ionicons name="md-star" size={12} color="#E7A74E" />
        <Stats>{vote_average}/10</Stats>
      </StatsContainer>
    </Container>
  );
}

export default SliderItem;
