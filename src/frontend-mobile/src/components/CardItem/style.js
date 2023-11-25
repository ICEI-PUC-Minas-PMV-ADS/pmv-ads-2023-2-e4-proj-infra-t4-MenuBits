import styled from "styled-components";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 21%;
  height: 30rem;
  background-color: #ffeccc;
  border-radius: 25px;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

export const Content = styled.View`
  width: 90%;
  height: 100%;
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

export const ImageArea = styled.View`
  width: 100%;
  height: 35%;
  background-color: #fffbf2;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > svg {
    font-size: 8rem;
    align-self: center;
  }
`;

export const Title = styled.Text`
  font-weight: 700;
  color: #2e2e2e;
  font-size: 1.5rem;
`;

export const Description = styled.Text`
  font-weight: 400;
  font-size: 1rem;
  color: #616161;
  padding-bottom: 2rem;
  height: 25%;
  overflow: hidden;
`;

export const Price = styled.Text`
  font-weight: 600;
  color: #2e2e2e;
  font-size: 2rem;
`;

export const Button = styled.Pressable`
  background-color: #c60404;
  color: white;
  padding: 10px;
  border-radius: 7px;
  margin: 10px 10%;
`;
