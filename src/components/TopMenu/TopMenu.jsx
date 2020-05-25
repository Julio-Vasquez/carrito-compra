import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import { ReactComponent as Logo } from "./../../assets/svg/ice-cream.svg";
import "./TopMenu.scss";

export default function TopMenu() {
  return (
    <Navbar bg="dark" variant="dark" className="top-menu">
      <Container>
        <BrandNav />
        <MenuNav />
      </Container>
    </Navbar>
  );
}

const BrandNav = () => {
  const { Brand } = Navbar;
  const { Link } = Nav;
  return (
    <Brand>
      <Link href="/">
        <Logo />
      </Link>
      <Link href="/">
        <h2>Mundo de los Helados</h2>
      </Link>
    </Brand>
  );
};

const MenuNav = () => {
  const { Link } = Nav;
  return (
    <Nav className="mr-auto">
      <Link href="#">Aperitivos</Link>
      <Link href="#">Acompa;antes</Link>
    </Nav>
  );
};
