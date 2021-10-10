import styled from "styled-components";

export const Shape = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  transform: rotate(45deg);
  border: ${(props) => props.borderSize} solid ${(props) => props.borderColor};
  z-index: -1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
