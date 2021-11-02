import { css, createGlobalStyle } from "styled-components";

import theme from "@theme";

export const globalStyle = css`
  html {
    font-family: "Heebo", sans-serif;
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

  .ico.border {
    border: 2px solid rgb(${theme.gray});
    border-radius: 5px;
    padding: 0.3rem 0.6rem;
    transition: border 0.2s ease-in-out, color 0.3s ease-in-out;
  }

  .ico.border:hover {
    border: 2px solid rgb(${theme.gold});
  }

  //scrollbar
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(${theme.black});
    transition: background 0.3s ease-in-out;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(${theme.gold});
  }

  .map {
    background: rgb(${theme.white});
    border: 2px solid rgb(${theme.gray});
    transition: border 0.4s ease-in-out;
    box-shadow: 0 0 10px rgba(${theme.black}, 0.1);

    &:hover {
      border: 2px solid rgb(${theme.gold});
    }
  }
`;

export const GlobalStyles = createGlobalStyle`${globalStyle}`;
