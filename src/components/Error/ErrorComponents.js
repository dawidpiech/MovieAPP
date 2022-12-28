import styled from "styled-components";

export const ErrorWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-itmes: center;
  border-radius: 10px;

  h1,
  h2 {
    text-align: center;
  }

  svg {
    max-width: 500px;
    align-self: center;
  }
`;
