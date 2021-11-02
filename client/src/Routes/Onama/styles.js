import styled from "styled-components";

import theme from "@theme";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: 5rem;
`;

export const Header = styled.h1`
  font-weight: 400;
  text-align: center;
  margin-top: 5rem;
  color: rgba(${theme.black}, 0.9);
`;

export const Main = styled.div`
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  line-height: 2rem;
  margin: 5rem 0;
  padding: 0 30%;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  height: 2px;
  margin: auto;
  width: 75rem;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  height: 10rem;
  width: 10rem;
  transform: rotate(45deg) translate(-3.58rem, -3.58rem);
  border: 2px solid rgb(${theme.gold});
  outline: 2px solid rgba(${theme.black}, 0.9);
  outline-offset: 2rem;
  overflow: hidden;
  position: relative;
`;

export const Image = styled.img`
  height: 15rem;
  width: 20rem;
  position: absolute;
  top: -35%;
  left: -40%;
  transform: rotate(-45deg);
`;

export const Line = styled.div`
  width: 40%;
  border-radius: 50%;
  height: 1px;
  background: rgba(${theme.black}, 0.9);
`;
