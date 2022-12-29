import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Image, Title, Character } from "./PeopleTileComponents";
import noPersonPhoto from "./noPersonPhoto.png";

const PersonTileWrapper = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.colors.gray} 0px 4px 12px;
  border-radius: 10px;
  transition: transform 0.5s ease 0s, box-shadow 0.5s ease 0s;
`;

const Link = styled(NavLink)`
  position: relative;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: ${({ theme }) => theme.colors.black};
`;

const PersonTile = ({ id, name, profile_path, character }) => {
  return (
    <PersonTileWrapper key={id}>
      <Link to={"/peopleProfile/" + id}>
        <Image
          src={
            profile_path
              ? `${process.env.REACT_APP_API_PHOTO_URL}w500${profile_path}`
              : noPersonPhoto
          }
        />
        <Title>{name}</Title>
        {character ? <Character>{character}</Character> : ""}
      </Link>
    </PersonTileWrapper>
  );
};

export default PersonTile;
