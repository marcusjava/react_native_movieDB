import React from "react";
import { View, Text } from "react-native";
import { BackButton, Title, Container } from "./styles";
import { Feather } from "@expo/vector-icons";
import { WebView } from "react-native-webview";

// import { Container } from './styles';

const ModalLink = ({ link, title, closeModal }) => {
  return (
    <>
      <BackButton onPress={closeModal}>
        <Feather name="x" size={35} color="#fff" />
        <Title numberOfLines={1}>{title}</Title>
      </BackButton>
      <WebView source={{ uri: link }} />
    </>
  );
};

export default ModalLink;
