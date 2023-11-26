import styled from 'styled-components';

const CardContainer = styled.View`
  flex-direction: column;
  border-radius: 20px;
  margin-top: 20%;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

const MenuContainer = styled.ScrollView`
  margin: 0 10px;
`;

const MenuCard = styled.View`
  flex-direction: column;
  justify-content: space-between;
  background-color: #930000;
  border-radius: 20px;
  padding: 10px;
  margin: 2px;
`;

const MenuImage = styled.Image`
  width: 80px;
  height: 70px;
  border-radius: 10px;
`;

const MenuDetailsContainer = styled.View`
  align-items: center;
  padding: 10px;
`;

const MenuTitle = styled.Text`
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  color: #fff;
`;

const MenuInfoContainer = styled.View`
  background-color: #f5a623;
  border-radius: 20px;
  padding: 2px;
  margin-top: 10px;
  text-align: center;
`;

const MenuType = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export {
  CardContainer,
  HeaderContainer,
  Title,
  MenuContainer,
  MenuCard,
  MenuImage,
  MenuDetailsContainer,
  MenuTitle,
  MenuInfoContainer,
  MenuType,
}