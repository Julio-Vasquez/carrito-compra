import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const CarContentFooter = ({ totalPrice }) => {
  return (
    <div className="cart-content__footer">
      <div>
        <p>Total aproximado: </p>
        <p>$ {totalPrice.toFixed(2)}</p>
      </div>
      <Button>Tramitar pedido</Button>
    </div>
  );
};

CarContentFooter.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};

export default CarContentFooter;
