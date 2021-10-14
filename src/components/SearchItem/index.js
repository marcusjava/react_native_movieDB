import React from "react";
import { Container, Title, StatsContainer, Stats, Image } from "./styles";
import { Ionicons } from "@expo/vector-icons";

const SearchItem = ({
  data: { id, poster_path, title, vote_average },
  navigateToDetailsPage,
}) => {
  return (
    <Container activeOpacity={0.8} onPress={() => navigateToDetailsPage(id)}>
      {poster_path ? (
        <Image
          resizemethod="resize"
          source={{
            uri: `https://image.tmdb.org/t/p/original${poster_path}`,
          }}
        />
      ) : (
        <Image
          resizemethod="resize"
          source={require("../../../assets/no-image.png")}
        />
      )}
      <Title numberOfLines={1}>{title}</Title>
      <StatsContainer>
        <Ionicons name="md-star" size={12} color="#E7A74E" />
        <Stats>{vote_average}/10</Stats>
      </StatsContainer>
    </Container>
  );
};

export default SearchItem;
