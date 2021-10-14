import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  width: 85%;
  height: 50px;
  background-color: #6a6c76;
  color: #fff;
  border-radius: 50px;
  padding: 0 15px;
  font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
  width: 15%;
  margin: 0 10px;
`;
