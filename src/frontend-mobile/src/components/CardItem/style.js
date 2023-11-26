import styled from "styled-components";

export const Container = styled.View`
  margin: 30px;
  background-color: #ffeccc;
  border-radius: 25px;
  align-items: center;
`;

export const Content = styled.View`
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const ImageArea = styled.View`
  width: 100%;
  background-color: #fffbf2;
  border-radius: 20px;
`;

export const Title = styled.Text`
  font-weight: 700;
  color: #2e2e2e;
  font-size: 18px;
  margin-top: 15px;
  text-align: center;
`;

export const Description = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: #616161;
  padding-bottom: 5px;
  overflow: hidden;
  text-align: center;
`;

export const Price = styled.Text`
  font-weight: 600;
  color: #2e2e2e;
  font-size: 16px;
  margin-top: 10px;
`;

export const Button = styled.Pressable`
  background-color: #c60404;
  color: white;
  padding: 10px;
  border-radius: 7px;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  color: white;
  font-weight: 600;
`;
