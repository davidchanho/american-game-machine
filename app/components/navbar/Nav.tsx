import { Nav as BsNav } from "react-bootstrap";
import styled from "styled-components";
import { useAppContext } from "../../context";
import NavLink from "./NavLink";

const Container = styled(BsNav)`
  margin-left: auto;
  display: inline-flex;
`;

function Nav() {
  const {
    state: { links },
  } = useAppContext();

  return (
    <Container>
      {links.map(({ href, label }) => {
        return (
          <NavLink key={`nav-link-${label}`} href={href}>
            {label}
          </NavLink>
        );
      })}
    </Container>
  );
}

export default Nav;
