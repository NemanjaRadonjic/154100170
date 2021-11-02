import styled from "styled-components";

import theme from "@theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const Header = styled.h1`
  font-weight: 400;
  text-align: center;
  margin-top: 5rem;
  color: rgba(${theme.black}, 0.9);
`;

export const Content = styled.div`
  margin: 5rem 0;
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const Contact = styled.div`
  margin: 2rem auto;
  width: 30%;
  display: flex;
  justify-content: space-around;
`;
export const Text = styled.div`
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  margin-bottom: 7rem;
  display: flex;
`;

export const Phone = styled.div`
  font-size: 2.5rem;
  line-height: 100%;
  margin-left: 1rem;
  letter-spacing: 1.5px;
  color: rgb(${theme.gold});
`;

export const IframeContainer = styled.div`
  width: 50rem;
  height: 3+0rem;
`;
