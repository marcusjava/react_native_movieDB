import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding-top: 14px;
  padding-bottom: 14px;
  padding-right: 10px;
  height: 180px;
  width: 130px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  margin: 8px 0;
`;

export const Image = styled.Image`
  width: 100%;
  height: 150px;
  border-radius: 5px;
`;

export const StatsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Stats = styled.Text`
  color: #fff;
  margin: 0 5px;
  font-size: 12px;
`;
