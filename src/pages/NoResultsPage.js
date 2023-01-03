import { MainWrapper } from "../components/Wrappers/Wrappers";
import { ReactComponent as NoResultsSVG } from "../components/Error/noResults.svg";
import { ErrorWrapper } from "../components/Error/ErrorComponents";

const NoResultsPage = ({ query }) => {
  return (
    <MainWrapper>
      <ErrorWrapper>
        <h1>Sorry, there are no results for {`(${query}):`}</h1>
        <NoResultsSVG></NoResultsSVG>
      </ErrorWrapper>
    </MainWrapper>
  );
};

export default NoResultsPage;
