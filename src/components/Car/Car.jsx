import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as CartEmpty } from "./../../assets/svg/cart-empty.svg";
import { ReactComponent as CartFull } from "./../../assets/svg/cart-full.svg";
import { ReactComponent as Close } from "./../../assets/svg/close.svg";
import { ReactComponent as Garbage } from "./../../assets/svg/garbage.svg";

import { PATH_BASE, STORAGE_PRODUCTS_EC } from "./../../utils/constants";

import "./Car.scss";

const Car = (props) => {
  const [carOpen, setCarOpen] = useState(false);
  const widthCartContent = carOpen ? 400 : 0;

  const openCar = () => {
    setCarOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCar = () => {
    setCarOpen(false);
    document.body.style.overflow = "scroll";
  };

  const emptyCar = () => {
    localStorage.removeItem(STORAGE_PRODUCTS_EC);
  };

  return (
    <>
      <Button variant="link" className="car">
        <CartEmpty onClick={openCar} />
      </Button>
      <div className="car-content" style={{ width: widthCartContent }}>
        Todos mis productos
      </div>
    </>
  );
};

export default Car;
