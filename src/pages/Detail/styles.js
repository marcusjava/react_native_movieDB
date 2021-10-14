import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #141a29;
`;

export const Header = styled.View`
  z-index: 99;
  position: absolute;
  top: 35px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 14px;
`;

export const HeaderButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  background-color: rgba(25, 46, 48, 0.5);
  border-radius: 23px;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 350px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const ButtonLink = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 325px;
  padding: 15px;
  border-radius: 50px;
  background-color: #e72749;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 22px;
  margin: 40px 14px;
`;

export const ContentArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 14px;
`;

export const StatsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Stats = styled.Text`
  color: #fff;
  margin: 0 5px;
  font-size: 20px;
`;

export const Genres = styled.FlatList`
  padding-left: 14px;
  margin: 8px 0;
  max-height: 35px;
  min-height: 35px;
`;

export const Description = styled.Text`
  padding-left: 14px;
  padding-right: 14px;
  line-height: 20px;
  color: #fff;
`;
