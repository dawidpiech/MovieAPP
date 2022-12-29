import { useLocation } from "react-router-dom";

export const useTypePage = () => {
  const location = useLocation().pathname.split("/")[1];
  let typeOfPage;

  switch (location) {
    case "peopleProfile":
      typeOfPage = "people";
      break;
    case "people":
      typeOfPage = "people";
      break;
    case "movies":
      typeOfPage = "movie";
      break;
    case "":
      typeOfPage = "movie";
      break;
    default:
      typeOfPage = "movie";
  }

  return typeOfPage;
};
