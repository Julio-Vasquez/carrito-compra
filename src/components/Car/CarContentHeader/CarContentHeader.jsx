import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

import { ReactComponent as Garbage } from "./../../../assets/svg/garbage.svg";
import { ReactComponent as Close } from "./../../../assets/svg/close.svg";

const CarContentHeader = ({ closeCar, emptyCar }) => {
  return (
    <div className="cart-content__header">
      <div>
        <Close onClick={closeCar} />
        <h2>Carrito</h2>
      </div>
      <Button variant="link" onClick={emptyCar}>
        Vaciar
        <Garbage />
      </Button>
    </div>
  );
};

CarContentHeader.propTypes = {
  closeCar: PropTypes.func.isRequired,
  emptyCar: PropTypes.func.isRequired,
};

export default CarContentHeader;
