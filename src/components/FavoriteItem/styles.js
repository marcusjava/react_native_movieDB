import styled from "styled-components";

export const Container = styled.View`
  width: 100%;
  height: 100px;
  justify-content: center;
  margin: 5px 0;
`;

export const Title = styled.Text`
  color: #fff;
  margin-bottom: 3px;
`;

export const StatsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const ActionContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  color: #fff;
  background-color: #e72749;
  width: 80%;
  border-radius: 25px;
  padding: 5px;
  justify-content: center;
  align-items: center;
`;

export const Trash = styled.TouchableOpacity``;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const Stats = styled.Text`
  color: #fff;
`;
