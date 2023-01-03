import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.black};
  margin: 14px 0px 0px;
  text-align: center;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const Character = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin: 5px 0px 0px;
  text-align: center;
  font-size: 18px;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;
