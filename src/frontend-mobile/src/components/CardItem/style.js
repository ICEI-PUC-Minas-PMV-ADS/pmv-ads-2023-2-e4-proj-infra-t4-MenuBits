import styled from "styled-components";

export const Container = styled.View`
  width: 100vw;
  margin: 30px;
  background-color: #ffeccc;
  border-radius: 25px;
`;

export const Content = styled.View``;

export const ImageArea = styled.View`
  width: 100%;
  height: 35%;
  background-color: #fffbf2;
  border-radius: 20px;
`;

export const Title = styled.Text`
  font-weight: 700;
  color: #2e2e2e;
  font-size: 18px;
`;

export const Description = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: #616161;
  padding-bottom: 5px;
  height: 25%;
  overflow: hidden;
`;

export const Price = styled.Text`
  font-weight: 600;
  color: #2e2e2e;
  font-size: 16px;
`;

export const Button = styled.Pressable`
  background-color: #c60404;
  color: white;
  padding: 10px;
  border-radius: 7px;
  margin: 10px 10%;
`;
