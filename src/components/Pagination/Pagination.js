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

const Pagination = ({ maxPage, page, type, typeOfSearch, query }) => {
  const navigate = useNavigate();

  const changePage = (e) => {
    if (type === "person" || type === "movie")
      switch (e) {
        case "first":
          navigate(`/${type}?page=1`);
          break;
        case "previous":
          navigate(`/${type}?page=` + --page);
          break;
        case "next":
          navigate(`/${type}?page=` + ++page);
          break;
        case "last":
          navigate(`/${type}?page=` + maxPage);
          break;
        default:
          navigate(`/${type}?page=1`);
      }
    else
      switch (e) {
        case "first":
          navigate({ pathname: `?type=${typeOfSearch}&page=1&query=${query}` });
          break;
        case "previous":
          navigate(`?type=${typeOfSearch}&page=${--page}&query=${query}`);
          break;
        case "next":
          navigate(`?type=${typeOfSearch}&page=${++page}&query=${query}`);
          break;
        case "last":
          navigate(`?type=${typeOfSearch}&page=${maxPage}}&query=${query}`);
          break;
        default:
          navigate(`?type=${typeOfSearch}&page=1&query=${query}`);
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
