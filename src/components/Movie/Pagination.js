import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 24px;
  margin: 0px 6px;
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  transition: background 0.4s ease 0s;
  background: ${(props) =>
    props.disabled
      ? ({ theme }) => theme.colors.lightGray
      : ({ theme }) => theme.colors.blue};
  cursor: pointer;

  span {
    color: blue;
    font-size: 24px;
    margin: -2px 8px 0 8px;
    color: ${(props) =>
      props.disabled
        ? ({ theme }) => theme.colors.black
        : ({ theme }) => theme.colors.darkBlue};
  }
`;

const Page = styled.p`
  margin: 0 20px;
  color: ${({ theme }) => theme.colors.gray};
  span {
    font-weight: 600;
    margin: 0 10px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

const Pagination = ({ maxPage, page }) => {
  const navigate = useNavigate();

  const changePage = (e) => {
    switch (e) {
      case "first":
        navigate("/movies?page=1");
        break;
      case "previous":
        navigate("/movies?page=" + --page);
        break;
      case "next":
        navigate("/movies?page=" + ++page);
        break;
      case "last":
        navigate("/movies?page=" + maxPage);
        break;
      default:
        navigate("/movies?page=1");
    }
  };
  return (
    <PaginationWrapper>
      <Button
        onClick={() => changePage("first")}
        disabled={page <= 1 ? true : false}
      >
        <span> « </span> First
      </Button>
      <Button
        onClick={() => changePage("previous")}
        disabled={page <= 1 ? true : false}
      >
        <span> « </span> Previous
      </Button>
      <Page>
        Page <span>{page}</span> of <span>{maxPage}</span>
      </Page>
      <Button
        onClick={() => changePage("next")}
        disabled={page >= maxPage ? true : false}
      >
        Next <span> » </span>
      </Button>
      <Button
        onClick={() => changePage("last")}
        disabled={page >= maxPage ? true : false}
      >
        Last <span> » </span>
      </Button>
    </PaginationWrapper>
  );
};

export default Pagination;
