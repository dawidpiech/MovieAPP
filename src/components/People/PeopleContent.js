import styled from "styled-components";
import PeopleTile from "./PersonTile";

const PeopleWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(292px, 1fr));
  gap: 24px;
`;

const PeopleContent = ({ people }) => {
  return (
    <PeopleWrapper>
      {people &&
        people &&
        people.map((person) => (
          <PeopleTile
            key={person.id}
            id={person.id}
            name={person.name}
            profile_path={person.profile_path}
          />
        ))}
    </PeopleWrapper>
  );
};

export default PeopleContent;
