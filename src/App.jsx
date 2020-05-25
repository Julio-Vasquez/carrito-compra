import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./components/Footer";

function App() {
  const notify = () => toast("Proyecto: Carrito de compra!");
  return (
    <div className="App">
      <button onClick={notify}>Click en mi!</button>
      <ToastContainer />

      <Footer />
    </div>
  );
}

export default App;
