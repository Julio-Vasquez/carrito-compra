import React from "react";
import TopMenu from "./components/TopMenu";
import Products from "./components/Products";
import useFetch from "./Hooks/useFetch";

import { urlApiProducts } from "./utils/constants";

function App() {
  const products = useFetch(urlApiProducts, null);

  return (
    <div className="App">
      <TopMenu />
      <Products
        products={products.result}
        error={products.error}
        loading={products.loading}
      />
    </div>
  );
}

export default App;
