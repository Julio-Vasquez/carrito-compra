import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import Car from "./../Car";

import { ReactComponent as Logo } from "./../../assets/svg/ice-cream.svg";
import "./TopMenu.scss";

const TopMenu = ({ productCar, getProductsCar }) => {
  return (
    <Navbar bg="dark" variant="dark" className="top-menu">
      <Container>
        <BrandNav />
        <MenuNav />
        <Car productCar={productCar} getProductsCar={getProductsCar} />
      </Container>
    </Navbar>
  );
};

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

TopMenu.propTypes = {
  productCar: PropTypes.array.isRequired,
  getProductsCar: PropTypes.func.isRequired,
};

export default TopMenu;
