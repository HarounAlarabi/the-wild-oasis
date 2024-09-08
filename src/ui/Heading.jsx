import styled from "styled-components";
import { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 4rem;
    `}
  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: 3rem;
    `}
  ${(props) =>
    props.type === "h3" &&
    css`
      font-size: 2rem;
    `}
  ${(props) =>
    props.type === "h4" &&
    css`
      font-size: 1rem;
    `}
  
  font-weight: bold;
`;

export default Heading;
