import { useLocation, useSearchParams } from "react-router-dom";

export const useTypePage = () => {
  const location = useLocation().pathname.split("/")[1];
  const [params] = useSearchParams();
  const type = params.get("type");
  let typeOfPage;

  switch (location) {
    case "peopleProfile":
      typeOfPage = "person";
      break;
    case "people":
      typeOfPage = "person";
      break;
    case "movies":
      typeOfPage = "movie";
      break;
    case "":
      typeOfPage = "movie";
      break;
    case "search":
      typeOfPage = type;
      break;
    default:
      typeOfPage = "movie";
  }

  return typeOfPage;
};
