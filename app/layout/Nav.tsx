import { Nav as BsNav } from "react-bootstrap";
import styled from "styled-components";
import { useAppContext } from "../context";
import NavLink from "./NavLink";

function Nav() {
  const {
    state: { links },
  } = useAppContext();

  return (
    <BsNav>
      {links.map(({ href, label }) => {
        return (
          <NavLink key={`nav-link-${label}`} href={href}>
            {label}
          </NavLink>
        );
      })}
    </BsNav>
  );
}

export default Nav;
