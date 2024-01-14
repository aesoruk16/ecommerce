import { observer } from "mobx-react";
import logo from "../logo.svg";
import "../App.css";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Product from "../components/Products/Products";
import Cart from "../components/Cart/Cart";
import baseStore from "../stores/base";

function index() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row mt-4">
          {baseStore.cart.length == 0 ? (
            <>
              <Sidebar col={"col-md-3"} />
              <Product col={"col-md-9 col-md-2 mt-5"} />
            </>
          ) : (
            <>
              <Sidebar col={"col-md-2"} />
              <Product col={"col-md-7 mt-5"} />
              <Cart col={"col-md-3"} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default observer(index);
