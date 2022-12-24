import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(292px, 1fr));
  gap: 24px;
`;

const Pagination = ({ maxPage, page }) => {
  const navigate = useNavigate();

  navigate("/movies?page=5");
  return <PaginationWrapper></PaginationWrapper>;
};

export default Pagination;
