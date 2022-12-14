import styled from "styled-components";

const PopularMovie = styled.div`
  width: 100%;
  font-size: 40px;
  text-align: center;
  background: ${({ theme }) => theme.colors.white};
`;

const PopularMoviePage = () => {
  return <PopularMovie>POPULAR MOVIE PAGE</PopularMovie>;
};

export default PopularMoviePage;
