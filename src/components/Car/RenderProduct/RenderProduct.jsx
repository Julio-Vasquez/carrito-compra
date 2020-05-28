import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { PATH_BASE } from "./../../../utils/constants";

const RenderProduct = ({
  product: { id, name, image, price },
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <div className="cart-content__product">
      <img src={`${PATH_BASE}/${image}`} alt={name} />
      <div className="cart-content__product-info">
        <div>
          <h3>title: {name}</h3>
          <p>Price: $ {price}</p>
        </div>
        <div>
          <p>En carrito: {quantity} ud</p>
          <div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => decreaseQuantity(id)}
            >
              -
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => increaseQuantity(id)}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

RenderProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    extraInfo: PropTypes.string,
    price: PropTypes.number.isRequired,
  }),
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};

export default RenderProduct;
