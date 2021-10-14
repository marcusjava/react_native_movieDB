import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { StatusBar } from "react-native";
import axios from "axios";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Routes />
    </NavigationContainer>
  );
}
