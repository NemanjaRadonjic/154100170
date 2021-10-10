import { css, createGlobalStyle } from "styled-components";

import theme from "@theme";

export const globalStyle = css`
  html {
    font-family: "Noto Sans", sans-serif;
    font-size: 100%;

    @media (max-width: 1600px) {
      font-size: 90%;
    }

    @media (max-width: 1300px) {
      font-size: 80%;
    }

    @media (max-width: 1100px) {
      font-size: 70%;
    }

    @media (max-width: 1000px) {
      font-size: 60%;
    }

    @media (max-width: 900px) {
      font-size: 50%;
    }

    @media (max-width: 600px) {
      font-size: 30%;
    }

    @media (max-width: 500px) {
      font-size: 20%;
    }
  }

  body {
    background: rgba(${theme.gold}, 0.1);
    width: 100wv;
    overflow-x: hidden;
  }

  a:-webkit-any-link {
    text-decoration: none;
    // height: 100%;
    // width: 100%;
    // display: flex;
    // align-items: center;
    color: inherit;
  }

  .ico {
    height: 2rem;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    color: rgb(${theme.gray});
  }

  .ico:hover {
    color: rgb(${theme.gold});
  }
`;

export const GlobalStyles = createGlobalStyle`${globalStyle}`;
