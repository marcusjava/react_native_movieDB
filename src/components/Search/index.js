import React, { useState } from "react";
import { Container, Input, Button } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function Search() {
  const [search, setSearch] = useState("");

  const navigation = useNavigation();

  const handleSearch = () => {
    if (search === "") return;
    navigation.navigate("Search", { name: search });
    setSearch("");
  };

  return (
    <Container>
      <Input
        placeholder="Procura algo?"
        placeholderTextColor="#ddd"
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <Button onPress={handleSearch}>
        <Feather name="search" size={30} color="#fff" />
      </Button>
    </Container>
  );
}

export default Search;
