import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  background: ${({ theme }) => theme.colors.black};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1368px;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Nav = styled.nav`
  display: flex;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  margin: 0;
  margin-left: 12px;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -1.5px;
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: 570px) {
    font-size: 13px;
    letter-spacing: 0.5px;
  }
`;

export const Menu = styled.div`
  margin-left: 80px;
  display: flex;

  @media (max-width: 1080px) {
    margin-left: 20px;
  }
`;

export const LinkLogo = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.7;
  }

  svg {
    width: 40px;
    height: 40px;

    @media (max-width: 570px) {
      width: 17px;
    }
  }
`;

export const Link = styled(LinkLogo)`
  padding: 12px 24px;
  font-weight: bold;
  &.active {
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 24px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 26px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 32px;
  @media (max-width: 900px) {
    width: 90%;
    margin-top: 13px;
  }
  @media (max-width: 570px) {
    padding: 8px 12px;
  }

  svg {
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }
`;

export const Input = styled.input`
  width: 340px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  &:active,
  &:focus {
    outline: none;
    border: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  @media (max-width: 1080px) {
    width: 240px;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 570px) {
    font-size: 13px;
  }
`;
