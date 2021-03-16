import Image from "next/image";
import { Navbar as BsNavbar } from "react-bootstrap";
import Nav from "./Nav";

export default function Navbar() {
  return (
    <BsNavbar bg="light" expand="lg">
      <BsNavbar.Brand href="/">
        <Image src="/svg/logo.svg" width={30} height={30} />
      </BsNavbar.Brand>

      <BsNavbar.Toggle aria-controls="navbar-nav" />
      <BsNavbar.Collapse id="navbar-nav">
        <Nav />
      </BsNavbar.Collapse>
    </BsNavbar>
  );
}
