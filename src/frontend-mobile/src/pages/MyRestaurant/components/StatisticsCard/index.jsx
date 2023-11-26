import React from 'react';
import {
  BadgeDollarSign,
  BarChart4,
  ChefHat,
  UtensilsCrossed,
} from 'lucide-react-native';

import {
  Container,
  Header,
  Title,
  Section,
  StatisticsSection,
  StatisticCard,
  StatisticTitle,
  StatisticValue,
  StatisticIcon,
  StatisticText,
  StatisticImage
} from './styles';

const StatisticsCard = ({ restaurantData, items, menus }) => {
  return (
    <Container>
      <Header>
        <Title>{restaurantData.name}</Title>
      </Header>

      <Section>
        <StatisticsSection>
          <StatisticCard>
            <StatisticTitle>Estatísticas</StatisticTitle>

            <StatisticValue>
              <StatisticIcon>
                <BarChart4 size={30} color="#930000" />
              </StatisticIcon>
              <StatisticText>Total Itens Cadastrados: </StatisticText>
              <StatisticText>{items.length}</StatisticText>
            </StatisticValue>

            <StatisticValue>
              <StatisticIcon>
                <BadgeDollarSign size={30} color="#930000" />
              </StatisticIcon>
              <StatisticText>Total de Vendas de Itens: </StatisticText>
              <StatisticText>10</StatisticText>
            </StatisticValue>

            <StatisticValue>
              <StatisticIcon>
                <ChefHat size={30} color="#930000" />
              </StatisticIcon>
              <StatisticText>Total de Cardápios: </StatisticText>
              <StatisticText>{menus.length}</StatisticText>
            </StatisticValue>

          </StatisticCard>
        </StatisticsSection>

        <StatisticsSection>
          <StatisticCard>
            <StatisticTitle>Mais Vendido</StatisticTitle>

            <StatisticValue>
              <StatisticText>Coca-Cola 2L</StatisticText>
            </StatisticValue>

            <StatisticValue>
              <StatisticIcon>
                <UtensilsCrossed size={30} color="#930000" />
              </StatisticIcon>
              <StatisticText>Bebidas</StatisticText>
            </StatisticValue>
          </StatisticCard>

          <StatisticCard>
            <StatisticTitle>Menos Vendido</StatisticTitle>

            <StatisticValue>
              <StatisticText>Coca-Cola 2L</StatisticText>
            </StatisticValue>

            <StatisticValue>
              <StatisticIcon>
                <UtensilsCrossed size={30} color="#930000" />
              </StatisticIcon>
              <StatisticText>Bebidas</StatisticText>
            </StatisticValue>
          </StatisticCard>
        </StatisticsSection>
      </Section>
    </Container>
  );
};

export default StatisticsCard;
