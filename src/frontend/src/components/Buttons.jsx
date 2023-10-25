import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => (props.$variant == "secondary" ? "#C60404" : "#fff")};
  background-color: ${(props) => (props.$variant == "secondary" ? "rgba(255, 255, 255, 0)" : "#C60404")};
  border: ${(props) => (props.$variant == "secondary" ? "2px solid #C60404" : "none")};
  border-radius: ${(props) => (props.$rounded == true ? "40px" : "10px")};
  font-size: ${(props) => (props.$size == 'lg' ? "1.3rem" : "1.2rem")};
  padding: ${(props) => (props.$size == 'lg' ? "20px 40px" : "10px 20px")};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #fff;
    background-color: ${(props) => (props.$variant == "secondary" ? "#C60404" : "#c60404b6")};
    transform: scale(1.025);
  }

  &:active {
    color: #fff;
    background-color: #b70808;
    transform: scale(0.95);
  }
`;