import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import TopMenu from "./components/TopMenu";

function App() {
  const notify = () => toast("Proyecto: Carrito de compra!");

  return (
    <div className="App">
      <TopMenu />
      <button onClick={notify}>Click en mi!</button>
      <ToastContainer />
      <Loading />
      <Footer />
    </div>
  );
}

export default App;
