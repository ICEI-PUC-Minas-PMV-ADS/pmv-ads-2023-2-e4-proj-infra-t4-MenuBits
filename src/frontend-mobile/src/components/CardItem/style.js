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

  > svg {
    justify-self: end;
    font-size: 3.5rem;
    position: absolute;
    padding-bottom: 1.5rem;
  }
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

  > button {
    width: 80%;
  }
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

export const Title = styled.h1`
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

export const Price = styled.h2`
  font-weight: 600;
  color: #2e2e2e;
  font-size: 2rem;
`;

export const Button = styled.pressable`
  background-color: #c60404;
  color: white;
  padding: 10px;
  border-radius: 7px;
  margin: 10px 10%;
`;
