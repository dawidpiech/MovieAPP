import {
  Header,
  Content,
  Nav,
  Title,
  Menu,
  Link,
  LinkLogo,
  SearchWrapper,
  Input,
} from "./NavigationComponents";
import { ReactComponent as Logo } from "./logo.svg";
import { theme } from "../../app/theme";
import { ReactComponent as SearchIcon } from "./search.svg";
import { useTypePage } from "../../hooks/useTypeOfPage";

function Navigation() {
  const location = useTypePage();

  return (
    <Header>
      <Content>
        <Nav>
          <LinkLogo to="/">
            <Logo fill={theme.colors.white}></Logo>
            <Title>Movies APP</Title>
          </LinkLogo>
          <Menu>
            <Link
              to="/movies"
              className={location.pathname === "/" ? "active" : ""}
            >
              MOVIES
            </Link>
            <Link to="/people">PEOPLE</Link>
          </Menu>
        </Nav>
        <SearchWrapper>
          <SearchIcon fill="none" stroke={theme.colors.gray}></SearchIcon>
          <Input placeholder={`Search for ${location}`} type="text" max="50" />
        </SearchWrapper>
      </Content>
    </Header>
  );
}

export default Navigation;
