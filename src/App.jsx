import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import TopMenu from "./components/TopMenu";
import Products from "./components/Products";
import useFetch from "./Hooks/useFetch";

import { urlApiProducts, STORAGE_PRODUCTS_EC } from "./utils/constants";

function App() {
  const [productsCar, setProductsCar] = useState([]);

  const products = useFetch(urlApiProducts, null);

  const addProductCar = (id, name) => {
    console.log(`Has agregado el producto : ${name} con el id : ${id}`);
    //obtengo los productos actuales
    const arrayProducts = productsCar;
    //incluyo el nuevo producto
    arrayProducts.push(id);
    //actualizo el estado
    setProductsCar(arrayProducts);
    //almaceno en el localStorage el nuevo carro
    localStorage.setItem(STORAGE_PRODUCTS_EC, productsCar);
    toast.success(`🚀 ${name} añadido al carrito correctamente.`);
    //getProductsCar();
  };

  const getProductsCar = () => {
    const arrayProducts = localStorage.getItem(STORAGE_PRODUCTS_EC);
    //ceparo el string si existe
    if (arrayProducts) setProductsCar(arrayProducts.split(","));
    else setProductsCar([]);
    console.log(`Carrito viejo ${arrayProducts}`);
  };

  useEffect(() => {
    getProductsCar();
  }, []);

  return (
    <div className="App">
      <TopMenu />
      <Products
        products={products.result}
        error={products.error}
        loading={products.loading}
        addProductCar={addProductCar}
      />

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
