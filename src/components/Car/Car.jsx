import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { ReactComponent as CartEmpty } from "./../../assets/svg/cart-empty.svg";
import { ReactComponent as CartFull } from "./../../assets/svg/cart-full.svg";

import CarContentHeader from "./CarContentHeader";
import CarContentProducts from "./CarContentProducts";
import CarContentFooter from "./CarContentFooter";

import {
  removeDuplicateItems,
  removeItem,
  countDuplicateItems,
} from "./../../utils/arrayFunctions";

import { STORAGE_PRODUCTS_EC } from "./../../utils/constants";

import "./Car.scss";

const Car = ({ productCar, getProductsCar, products }) => {
  const [carOpen, setCarOpen] = useState(false);
  const widthCartContent = carOpen ? 400 : 0;
  const [singelProductsCart, setSingelProductsCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const allProductsId = removeDuplicateItems(productCar);
    setSingelProductsCart(allProductsId);
  }, [productCar]);

  useEffect(() => {
    const productData = [];
    let totalPriceTemp = 0;
    const allProductsId = removeDuplicateItems(productCar);
    allProductsId.forEach((productId) => {
      productData.push({
        id: productId,
        quantity: countDuplicateItems(productCar, parseInt(productId)),
      });
    });
    if (!products.loading && products.result) {
      products.result.forEach((product) => {
        productData.forEach((item) => {
          if (product.id === parseInt(item.id)) {
            totalPriceTemp += product.price * item.quantity;
          }
        });
      });
    }
    setTotalPrice(totalPriceTemp);
  }, [productCar, products]);

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

  const increaseQuantity = (id) => {
    const arrayItemsCar = productCar;
    arrayItemsCar.push(id);
    localStorage.setItem(STORAGE_PRODUCTS_EC, arrayItemsCar);
    getProductsCar();
  };

  const decreaseQuantity = (id) => {
    const result = removeItem(productCar, id.toString());
    localStorage.setItem(STORAGE_PRODUCTS_EC, result);
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
        <div className="cart-content__products">
          {singelProductsCart.map((idProducts, key) => (
            <CarContentProducts
              key={key}
              products={products}
              idProductsCar={productCar}
              idProductCar={parseInt(idProducts)}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          ))}
        </div>
        <CarContentFooter totalPrice={totalPrice} />
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
