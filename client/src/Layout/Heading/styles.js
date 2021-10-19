import styled from "styled-components";
import HeadingBackground from "@images/HeadingBackground.jpg";

import theme from "@theme";

// banner
export const Container = styled.section`
  background-image: linear-gradient(
      to left bottom,
      rgb(50, 50, 50),
      rgba(0, 0, 0, 0.8)
    ),
    url(${HeadingBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 60%;
  height: 30rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 0;
  overflow: hidden;
`;

export const Message = styled.h1`
  position: absolute;
  bottom: 45%;
  left: 15%;
  font-family: ${theme.writtenFont};
  // font-style: italic;
  font-size: 3.5rem;
  font-weight: 100;
  letter-spacing: 1px;
  line-height: 3rem;
  color: rgb(${theme.gray});

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -25%;
    height: 20rem;
    width: 20rem;
    transform: rotate(-45deg);
    border: 2px solid rgb(${theme.gold});
    outline: 2px solid rgba(${theme.white}, 0.5);
    outline-offset: 10rem;
    z-index: -1;
  }
`;

export const Info = styled.div`
  position: absolute;
  right: 15%;
  bottom: 3%;
  color: rgb(${theme.gray});

  &::before {
    content: "";
    color: red;
    position: absolute;
    bottom: -100%;
    left: -40%;
    height: 6rem;
    width: 6rem;
    transform: rotate(-45deg);
    border: 1px solid rgb(${theme.gold});
    outline: 1px solid rgba(${theme.white}, 0.5);
    outline-offset: 2rem;
    z-index: -1;
  }
`;
