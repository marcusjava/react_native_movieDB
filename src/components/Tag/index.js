import React from "react";

import { Text, Container } from "./styles";

function Tag({ name }) {
  return (
    <Container>
      <Text>{name}</Text>
    </Container>
  );
}

export default Tag;
