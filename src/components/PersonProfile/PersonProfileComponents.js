import styled from "styled-components";

export const PersonProfileDetailsWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  box-shadow: ${({ theme }) => theme.colors.gray} 0px 4px 12px;
  margin-top: 50px;
  padding: 30px;
  width: 100%;
  border-radius: 10px;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    flex-flow: column;
    padding: 5px;
  }
`;

export const PersonProfileImageWrapper = styled.div`
  max-width: 300px;
  width: 100%;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    max-width: none;
  }
`;

export const PersonDetailsWrapper = styled.div`
  min-width: 300px;
  font-size: 18px;
  font-weight: 400;
  width: 100%;
  padding: 20px;
  color: ${({ theme }) => theme.colors.black};

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    min-width: 250px;
    padding: 5px;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const DateOfBirth = styled.p`
  margin: 5px 0;
  span {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const PlaceOfBirth = styled.p`
  margin: 5px 0 20px 0;
  span {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Biography = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  margin: 0px;
`;

export const CastList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(292px, 1fr));
  gap: 24px;
`;

export const CrewTitle = styled.h2``;
