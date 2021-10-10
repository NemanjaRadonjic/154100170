import styled from "styled-components";

export const Container = styled.nav`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-around;
  width: 30%;
  color: rgba(230, 230, 230, 0.822);
  font-size: 1rem;
  cursor: pointer;
  padding: 0.7rem 0;
  z-index: 1;
`;

export const Item = styled.div`
  padding: 0.3rem 0;
  transition: color 0.3s ease-in-out;
  position: relative;

  &::after {
    content: "";
    background: rgba(230, 230, 230, 0.822);
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 0;

    transition: width 0.3s ease-in-out, background 0.3s ease-in-out;
  }

  &:hover {
    color: rgb(168, 133, 56);
  }

  &:hover::after {
    width: 100%;
    background: rgb(168, 133, 56);
  }
`;
