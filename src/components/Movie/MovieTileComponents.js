import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  margin: 5px 0 0 0;
`;

export const YearOfProduction = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray};
  margin: 10px 0;
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
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  bottom: 0;
  svg {
    width: 30px;
  }
`;
export const Rate = styled.p`
  margin: 0 15px 0 5px;
  font-size: 16px;
  font-weight: 600;
`;
export const Votes = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  background: ${({ theme }) => theme.colors.black};
`;
