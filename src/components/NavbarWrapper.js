import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
  NavbarText,
} from "reactstrap";
import Logo from "../assets/Logo.svg";

export default function NavbarWrapper() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Navbar classname="navbar" container expand="sm">
        <NavbarBrand href="/">
          <img src={Logo} alt="Billam Logo" />
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <Link to="/get-started">
              <Button color="primary">Get started</Button>
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
