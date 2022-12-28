import { MainWrapper } from "../components/Wrappers/Wrappers";
import { ReactComponent as ErrorSVG } from "../components/Error/error.svg";
import { ErrorWrapper } from "../components/Error/ErrorComponents";

const ErrorPage = () => {
  return (
    <MainWrapper>
      <ErrorWrapper>
        <ErrorSVG></ErrorSVG>
        <h1>OOOps! Something went wrong...</h1>
        <h2>Please try again :)</h2>
      </ErrorWrapper>
    </MainWrapper>
  );
};

export default ErrorPage;
