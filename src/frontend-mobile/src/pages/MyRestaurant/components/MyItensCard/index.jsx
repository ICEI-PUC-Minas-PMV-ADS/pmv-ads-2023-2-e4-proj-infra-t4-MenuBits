import React from 'react';
import { IceCream2 } from 'lucide-react-native';
import {
  CardContainer,
  HeaderContainer,
  Title,
  ItemContainer,
  ItemCard,
  ItemImage,
  ItemDetailsContainer,
  ItemName,
  ItemInfoContainer,
  ItemDescription,
} from './styles';

const MyItensCard = ({ items }) => {
  return (
    <CardContainer>
      <HeaderContainer>
        <IceCream2 width={32} height={32} color="#930000" />
        <Title>Meus Itens</Title>
      </HeaderContainer>

      <ItemContainer>
        {items.map((item) => (
          <ItemCard key={item.id}>
            <ItemDetailsContainer>
              <ItemName>{item.name}</ItemName>
            </ItemDetailsContainer>

            <ItemInfoContainer>
              <ItemDescription>{item.description}</ItemDescription>
            </ItemInfoContainer>
          </ItemCard>
        ))}
      </ItemContainer>
    </CardContainer>
  );
};

export default MyItensCard;
