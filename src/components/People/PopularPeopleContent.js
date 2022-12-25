import styled from "styled-components";
import PersonTile from "./PersonTile";

const PopularPeopleWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(292px, 1fr));
  gap: 24px;
`;

const PopularPeopleContent = ({ people }) => {
  return (
    <PopularPeopleWrapper>
      {people &&
        people.map((people) => (
          <PersonTile
            key={people.id}
            id={people.id}
            name={people.name}
            profile_path={people.profile_path}
          ></PersonTile>
        ))}
    </PopularPeopleWrapper>
  );
};

export default PopularPeopleContent;
