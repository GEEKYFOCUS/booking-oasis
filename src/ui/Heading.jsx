import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      @media screen and (max-width: 640px) {
        font-size: 1.5rem;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
    font-size: 2rem, 
    font-weight: 600
    @media screen and (max-width: 640px) {
        font-size: 1rem;
      }
`}

${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
      @media screen and (max-width: 640px) {
        font-size: 1rem;
      }
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
      @media screen and (max-width: 640px) {
        font-size: 1.5rem;
      }
    `}
`;
export default Heading;
