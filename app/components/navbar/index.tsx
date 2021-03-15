import { Navbar as BsNavbar } from "react-bootstrap";
import { useAppContext } from "../../context";
import Nav from "../nav";

export default function Navbar() {
  const {
    companyInfo: { abbreviation },
  } = useAppContext();

  return (
    <BsNavbar bg="light" expand="lg">
      <BsNavbar.Brand href="/">{abbreviation}</BsNavbar.Brand>

      <BsNavbar.Toggle aria-controls="navbar-nav" />
      <BsNavbar.Collapse id="navbar-nav">
        <Nav />
      </BsNavbar.Collapse>
    </BsNavbar>
  );
}
