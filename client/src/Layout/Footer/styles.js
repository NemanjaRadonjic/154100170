import styled from "styled-components";

import theme from "@theme";

export const Container = styled.div`
  width: 100%;
  color: rgb(${theme.gray});
  padding: 2rem 0;
  background: rgb(${theme.black});
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
`;

export const Info = styled.div`
  flex: 2;
  text-align: center;
  font-style: italic;
  color: inherit;
`;

export const Social = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: space-around;
  color: inherit;
`;

export const Phone = styled.div`
  flex: 2;
  text-align: center;
  position: relative;
  z-index: 0;
  color: inherit;
  font-style: italic;
  font-size: 0.9rem;

  &::before {
    content: "";
    color: red;
    position: absolute;
    bottom: 0;
    right: 25%;
    height: 6rem;
    width: 6rem;
    transform: rotate(-45deg);
    border: 1px solid rgb(${theme.gold});
    outline: 1px solid rgba(${theme.white}, 0.5);
    outline-offset: 2rem;
    z-index: -1;
  }
`;
