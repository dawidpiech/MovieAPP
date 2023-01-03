import styled from "styled-components";

export const PeopleWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  }
`;

export const MovieWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
`;

export const MainWrapper = styled.main`
  max-width: 1368px;
  margin: 0px auto;
  padding: 0px 10px 20px;
`;
