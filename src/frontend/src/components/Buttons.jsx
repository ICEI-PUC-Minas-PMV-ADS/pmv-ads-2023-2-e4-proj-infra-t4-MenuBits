import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => (props.$variant == "secondary" ? "#000" : "#fff")};
  background-color: ${(props) => (props.$variant == "secondary" ? "#fff" : "#C60404")};
  border: ${(props) => (props.$variant == "secondary" ? "2px solid #C75B00" : "none")};
  border-radius: ${(props) => (props.$rounded == true ? "40px" : "10px")};
  font-size: ${(props) => (props.$size == 'lg' ? "1rem" : "1rem")};
  padding: ${(props) => (props.$size == 'lg' ? "20px 40px" : "10px 20px")};
  transition: all 0.2s ease-in-out;
  font-weight: 500;

  &:hover {
    color: #fff;
    background-color: ${(props) => (props.$variant == "secondary" ? "#C75B00" : "#c60404b6")};
    transform: scale(1.025);
  }

  &:active {
    color: #fff;
    background-color: #b70808;
    transform: scale(0.95);
  }
`;