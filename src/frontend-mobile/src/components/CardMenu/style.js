import styled from "styled-components";

export const Container = styled.View`
  display: flex;
  margin: 8px 0;
`;

export const Content = styled.Pressable`
  display: flex;
  background-color: rgba(255, 162, 0, 0.2);
  padding: 20px;
  flex: 1;
  margin: 0 30px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-weight: 700;
  color: #2e2e2e;
  text-align: center;

  font-size: 30px;
`;
