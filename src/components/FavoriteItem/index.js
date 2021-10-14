import React from "react";
import {
  Container,
  Title,
  StatsContainer,
  Stats,
  ActionContainer,
  Text,
  Button,
  Trash,
} from "./styles";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// import { Container } from './styles';

const FavoriteItem = ({ item, deleteMovie, goToDetail }) => {
  return (
    <Container>
      <Title numberOfLines={1}>{item.title}</Title>
      <StatsContainer>
        <Ionicons name="md-star" size={12} color="#E7A74E" />
        <Stats>{item.vote_average}/10</Stats>
      </StatsContainer>
      <ActionContainer>
        <Button onPress={() => goToDetail(item.id)}>
          <Text>Ver detalhes</Text>
        </Button>
        <Trash onPress={() => deleteMovie(item.id)}>
          <Ionicons name="trash-outline" size={25} color="#fff" />
        </Trash>
      </ActionContainer>
    </Container>
  );
};

export default FavoriteItem;
