import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { ReactComponent as CartEmpty } from "./../../assets/svg/cart-empty.svg";
import { ReactComponent as CartFull } from "./../../assets/svg/cart-full.svg";

import CarContentHeader from "./CarContentHeader";
import { removeDuplicateItems } from "./../../utils/arrayFunctions";

import { PATH_BASE, STORAGE_PRODUCTS_EC } from "./../../utils/constants";

import "./Car.scss";

const Car = ({ productCar, getProductsCar, products }) => {
  const [carOpen, setCarOpen] = useState(false);
  const widthCartContent = carOpen ? 400 : 0;
  const [singelProductsCart, setSingelProductsCart] = useState([]);

  useEffect(() => {
    const allProductsId = removeDuplicateItems(productCar);
    setSingelProductsCart(allProductsId);
  }, [productCar]);

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
    getProductsCar();
  };

  return (
    <>
      <Button variant="link" className="car">
        {productCar.length > 0 ? (
          <CartFull onClick={openCar} />
        ) : (
          <CartEmpty onClick={openCar} />
        )}
      </Button>
      <div className="car-content" style={{ width: widthCartContent }}>
        <CarContentHeader closeCar={closeCar} emptyCar={emptyCar} />
        {singelProductsCart.map((idProducts, key) => (
          <CarContentProducts products={products} key={key} />
        ))}
      </div>
    </>
  );
};

Car.propTypes = {
  productCar: PropTypes.array.isRequired,
  getProductsCar: PropTypes.func.isRequired,
  products: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    result: PropTypes.array.isRequired,
    error: PropTypes.string,
  }),
};

export default Car;

const CarContentProducts = ({ products }) => {
  return (
    <div>
      <p>productos</p>
    </div>
  );
};

CarContentProducts.propTypes = {
  products: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    result: PropTypes.array.isRequired,
    error: PropTypes.string,
  }),
};
