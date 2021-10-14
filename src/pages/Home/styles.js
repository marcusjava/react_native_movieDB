import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #141a29;
  flex: 1;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  padding: 15px;
`;

export const BannerButton = styled.TouchableOpacity``;

export const Banner = styled.Image`
  height: 150px;
  border-radius: 6px;
  margin: 0 14px;
`;

export const SliderMovie = styled.FlatList`
  height: 250px;
  padding: 0 14px;
`;

export const LoadingContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #141a29;
`;
