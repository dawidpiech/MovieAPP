import styled from "styled-components";

export const MovieBackdrop = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  background: rgb(0, 0, 0);
  background: linear-gradient(
      270deg,
      rgb(0, 0, 0) 14.11%,
      rgba(0, 0, 0, 0.875) 15.08%,
      rgba(0, 0, 0, 0.72) 16.51%,
      rgba(0, 0, 0, 0.294) 19.99%,
      rgba(0, 0, 0, 0.16) 21.88%,
      rgba(0, 0, 0, 0) 25.68%
    ),
    linear-gradient(
      90deg,
      rgb(0, 0, 0) 13.6%,
      rgba(0, 0, 0, 0.984) 14.58%,
      rgba(0, 0, 0, 0.97) 15.44%,
      rgba(0, 0, 0, 0.867) 16.3%,
      rgba(0, 0, 0, 0.23) 22.87%,
      rgba(0, 0, 0, 0) 26.64%
    ),
    linear-gradient(
      rgb(0, 0, 0) 0%,
      rgba(0, 0, 0, 0.69) 4.66%,
      rgba(0, 0, 0, 0.44) 9.34%,
      rgba(0, 0, 0, 0.208) 15.16%,
      rgba(0, 0, 0, 0) 24.22%
    ),
    linear-gradient(
      189.44deg,
      rgba(0, 0, 0, 0) 58.48%,
      rgba(0, 0, 0, 0.106) 63.17%,
      rgba(0, 0, 0, 0.235) 68.85%,
      rgba(0, 0, 0, 0.494) 78.08%,
      rgba(0, 0, 0, 0.74) 85.86%,
      rgb(0, 0, 0) 92.87%
    );

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    background: transparent;
  }

  > div {
    width: 70vw;
    position: absolute;
    bottom: 0;
    color: ${({ theme }) => theme.colors.white};

    h1 {
      font-size: 64px;
      margin: 0;

      @media only screen and (max-width: ${({ theme }) =>
          theme.breakpoints.tablet}) {
        font-size: 24px;
      }
    }

    div {
      margin: 0;
      padding: 10px 0;

      span:nth-child(2) {
        font-size: 24px;
        margin: 15px 0 0;
        font-weight: 500;
      }

      span:nth-child(3) {
        margin: 24px 0 0 15px;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.white};
      }

      svg {
        width: 48px;
      }
    }
  }
`;

export const BackdropImage = styled.img`
  width: 70vw;
  z-index: -1;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    min-height: 50vh;
    width: 100vh;
  }
`;

export const MovieProfileDetailsWrapper = styled.section`
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
  }
`;

export const MovieProfileImageWrapper = styled.div`
  max-width: 300px;
  width: 100%;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    max-width: none;
  }
`;

export const MovieDetailsWrapper = styled.div`
  min-width: 300px;
  font-size: 18px;
  font-weight: 400;
  width: 100%;
  padding: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const Production = styled.p`
  margin: 5px 0;
  span {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const DateOfRelease = styled.p`
  margin: 5px 0 20px 0;
  span {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const ListOfGenres = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 0 10px 0;
  gap: 8px;
  margin: 0;
`;

export const Genre = styled.li`
  background-color: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 5px;
`;

export const Rating = styled.div`
  display: flex;
  margin: 10px 0 30px 0;
  svg {
    width: 32px;
    margin: 0 10px;
  }
`;

export const Rate = styled.span`
  margin: 17px 0 0;
`;

export const Votes = styled.span`
  margin: 19px 0 0 15px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Overview = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  margin: 0px;
`;
