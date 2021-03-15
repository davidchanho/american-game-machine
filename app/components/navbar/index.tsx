import Link from "next/link";
import { Nav, Navbar as BsNavbar } from "react-bootstrap";
import { useAppContext } from "../../context";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const {
    companyInfo: { abbreviation },
  } = useAppContext();

  return (
    <BsNavbar className={styles.navbar} bg="light" expand="lg">
      <BsNavbar.Brand href="/">{abbreviation}</BsNavbar.Brand>

      <BsNavbar.Toggle aria-controls="navbar-nav" />
      <BsNavbar.Collapse id="navbar-nav">
        <Nav className={styles.nav}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </Nav>
      </BsNavbar.Collapse>
    </BsNavbar>
  );
}
