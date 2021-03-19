import { Nav as BsNav } from "react-bootstrap";
import { links } from "../../context";
import NavLink from "./NavLink";

function Nav() {
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
