import styled from "styled-components";

const ErrorContainer = styled.div`
  width: 100%;
  font-size: 40px;
  text-align: center;
  background: ${({ theme }) => theme.colors.red};
`;

const ErrorPage = () => {
  return <ErrorContainer>ERROR PAGE</ErrorContainer>;
};

export default ErrorPage;
