import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #930000;
  border-radius: 20px;
  margin: 20% 10px 0 10px;
`;

const Header = styled.View`
  padding: 15px;
  height: 80px;
  background-color: #930000;
  border-radius: 20px 20px 0 0;
`;

const Title = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  color: white;
`;

const Section = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const StatisticsSection = styled.View`
  width: 100%;
  padding: 10px;
  background-color: #930000;
  text-align: center;
`;

const StatisticCard = styled.View`
  background-color: #fff;
  border: 2px solid #c75b00;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
`;

const StatisticTitle = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: #c75b00;
`;

const StatisticValue = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const StatisticIcon = styled.View`
  margin-right: 10px;
`;

const StatisticText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const StatisticImage = styled.Image`
  width: 80px;
  height: 70px;
  border-radius: 10px;
`;

export {
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
  StatisticImage,
};