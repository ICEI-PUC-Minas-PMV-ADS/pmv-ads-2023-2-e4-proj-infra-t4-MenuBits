import styled from "styled-components";

export const Container = styled.ScrollView`
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px;
  gap: 15px;
`;

export const Content = styled.View`
  margin-top: 60px;
`;

export const Text = styled.Text`
  font-size: 34px;
  padding: 5px;
  justify-content: center;
  flex: 1;
  text-align: center;
  margin-bottom: 10px;
`;

export const Line = styled.View`
  height: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10px 70px;
  background-color: rgba(0, 0, 0, 0.2);
`;
