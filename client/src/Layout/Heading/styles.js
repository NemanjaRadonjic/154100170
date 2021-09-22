import styled from "styled-components";
import HeadingBackground from "@images/HeadingBackground.jpg";
// banner
export const Container = styled.section`
  background-image: linear-gradient(
      to left bottom,
      rgb(27, 71, 166) 50%,
      rgba(27, 71, 166, 0.8) 100%
    ),
    url(${HeadingBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 60%;
  height: 40vh;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Message = styled.h1`
  font-family: "Grechen Fuemen", cursive;
  font-size: 2.5rem;
  width: 50%;
  letter-spacing: 4px;
  color: rgb(220, 220, 220);
`;

export const Info = styled.div``;
