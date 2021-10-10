import styled from "styled-components";

import theme from "@theme";

export const Container = styled.div`
  display: flex;
  border: 1px solid rgb(${theme.black});
  // box-shadow: 0 0 10px rgba(${theme.black}, 0.2);
  height: 15rem;
  margin: 5rem 15rem;
  background: rgb(${theme.white});
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 20rem;
  order: ${(props) => props.order === "right" && "2"};
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: ${(props) =>
    props.order === "left" ? "-5rem " : props.order === "right" ? "5rem" : "0"};
  height: 15rem;
  box-shadow: 0 0 30px 0 rgb(0, 0, 0, 0.4);
  transform: rotate(${(props) => props.rotation});
`;

export const Message = styled.div`
  padding: 0 5rem;
  width: 70%;
  color: rgb(${theme.black});
  font-style: italic;
  font-size: 1.5rem;
  // font-family: ${theme.writtenFont};
  position: relative;
  margin: auto;
  text-align: center;
  flex: 1;

  // &::before {
  //   content: '"';
  //   font-size: 3rem;
  //   color: rgb(${theme.gold});
  // }

  // &::after {
  //   content: '"';
  //   font-size: 3rem;
  //   color: rgb(${theme.black});
  // }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: rgb(168, 133, 56);
  font-size: 1.5rem;
  padding: 5rem;
  font-style: italic;
`;
