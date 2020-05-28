import React from "react";
import PropTypes from "prop-types";

import Loading from "./../../Loading";
import { countDuplicateItems } from "./../../../utils/arrayFunctions";
import RenderProduct from "./../RenderProduct";

const CarContentProducts = ({
  products: { loading, result, error },
  idProductsCar,
  idProductCar,
  increaseQuantity,
  decreaseQuantity,
}) => {
  if (loading || !result) return <Loading />;
  else {
    return result.map((product, key) => {
      if (idProductCar === product.id) {
        const quantity = countDuplicateItems(idProductsCar, product.id);
        return (
          <RenderProduct
            key={key}
            product={product}
            quantity={quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        );
      }
    });
  }
};

CarContentProducts.propTypes = {
  products: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    result: PropTypes.array.isRequired,
    error: PropTypes.string,
  }),
  idProductsCar: PropTypes.array.isRequired,
  idProductCar: PropTypes.number.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};

export default CarContentProducts;
