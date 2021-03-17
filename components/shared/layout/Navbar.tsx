import Image from "next/image";
import { Navbar as BsNavbar } from "react-bootstrap";
import { useAppContext } from "../../../context";
import Nav from "./Nav";

export default function Navbar() {
   const {
     state: {
       company: { logo },
     },
   } = useAppContext();
  
  return (
    <BsNavbar bg="light" expand="lg">
      <BsNavbar.Brand href="/">
        <Image src={logo} width={30} height={30} />
      </BsNavbar.Brand>
      <BsNavbar.Toggle aria-controls="navbar-nav" />
      <BsNavbar.Collapse id="navbar-nav">
        <Nav />
      </BsNavbar.Collapse>
    </BsNavbar>
  );
}
