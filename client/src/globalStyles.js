import { css, createGlobalStyle } from "styled-components";

export const globalStyle = css`
  *,
  html {
    font-family: "Noto Sans", sans-serif;
  }

  a:-webkit-any-link {
    text-decoration: none;
    // height: 100%;
    // width: 100%;
    // display: flex;
    // align-items: center;
    color: inherit;
  }
`;

export const GlobalStyles = createGlobalStyle`${globalStyle}`;
