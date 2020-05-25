import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

import { PATH_BASE } from "./../../utils/constants";
import "./Product.scss";

const Product = ({ product: { id, name, image, extraInfo, price } }) => {
  const { Img, Body, Title, Text } = Card;
  return (
    <Col xs={3} className="product">
      <Card>
        <Img variant="top" src={`${PATH_BASE}/${image}`} />
        <Body id={id}>
          <Title>{name}</Title>
          <Text>{extraInfo}</Text>
          <Text id="price">${price} / Unidad</Text>
          <Button variant="success">Agregar al carrito</Button>
        </Body>
      </Card>
    </Col>
  );
};

Product.propType = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    extraInfo: PropTypes.string,
    price: PropTypes.number.isRequired,
  }),
};
export default Product;
