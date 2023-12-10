import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  overflow-y: scroll;
`;

export const Content = styled.div`
  margin-top: 60px;
`;

export const TitleText = styled.h1`
  font-size: 34px;
  padding: 5px;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
`;

export const Line = styled.hr`
  height: 1px;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10px 70px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 120px;
  gap: 10px;
`;
