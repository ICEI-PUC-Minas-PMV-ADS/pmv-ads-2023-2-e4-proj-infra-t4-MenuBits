import React from 'react';
import { MenuSquare, PenSquare } from 'lucide-react-native';
import {
  CardContainer,
  HeaderContainer,
  Title,
  MenuContainer,
  MenuCard,
  MenuImage,
  MenuDetailsContainer,
  MenuTitle,
  MenuInfoContainer,
  MenuType
} from './styles';

const MenuCards = ({ menus }) => {
  return (
    <CardContainer>
      <HeaderContainer>
        <MenuSquare width={32} height={32} color="#930000" />
        <Title>Meus Cardápios</Title>
      </HeaderContainer>

      <MenuContainer>
        {menus.map((menu) => (
          <MenuCard key={menu.id}>
            <MenuDetailsContainer>
              <MenuTitle>{menu.title}</MenuTitle>
            </MenuDetailsContainer>

            <MenuInfoContainer>
              <MenuType>Cardápio Principal</MenuType>
            </MenuInfoContainer>
          </MenuCard>
        ))}
      </MenuContainer>
    </CardContainer>
  );
};

export default MenuCards;
