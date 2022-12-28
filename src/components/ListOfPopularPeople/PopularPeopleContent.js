import PersonTile from "./PersonTile";
import { PeopleWrapper } from "../Wrappers/Wrappers";

const PopularPeopleContent = ({ people }) => {
  return (
    <PeopleWrapper>
      {people &&
        people.map((people) => (
          <PersonTile
            key={people.id}
            id={people.id}
            name={people.name}
            profile_path={people.profile_path}
          ></PersonTile>
        ))}
    </PeopleWrapper>
  );
};

export default PopularPeopleContent;
