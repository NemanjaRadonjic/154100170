import styled from "styled-components";

import theme from "@theme";

export const Container = styled.div`
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
`;

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: rgba(${theme.black}, 0.2);
  border: 1px solid rgba(${theme.gold}, 0.5);
  box-shadow: 0 0 10px 2px rgba(${theme.black}, 0.1);
  padding: 2rem;
  width: 60%;
  margin: auto;
`;

export const ImageItem = styled.img`
  width: 20rem;
  height: 15rem;
  border-top: 1rem solid transparent;
  border-bottom: 1rem solid transparent;
  border-radius: 1px;
`;

export const Nav = styled.div`
  text-align: center;
  margin: 1rem 0;

  & > a {
    margin: 0.5rem 1rem;
    font-size: 1.2rem;
    transition: color 0.3s ease-in-out;
  }
  & > a:hover {
    color: rgb(${theme.gold});
  }

  & > a.active {
    color: rgb(${theme.gold});
  }
`;
