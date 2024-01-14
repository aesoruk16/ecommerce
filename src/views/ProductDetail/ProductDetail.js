import React from "react";
import { observer } from "mobx-react";
import { useLocation } from "react-router-dom";

import Header from "../../components/Header/Header";
import Cart from "../../components/Cart/Cart";
import baseStore from "../../stores/base";
import { settings } from "../../brandSettings";
import moment from "moment";

function ProductDetail() {
  const location = useLocation();
  console.log("Location State:", location.state);

  var product = location.state && location.state.product;
  if(product!=null){
    localStorage.setItem('productInfo', JSON.stringify(product));
  }else{
    product = JSON.parse(localStorage.getItem('productInfo')) || [];
  }

  return (
    <div className="App">
      <Header />
      <div className="container mt-5">
        <div className="mt-4">
          {baseStore.cart.length !== 0 ? (
            <div className="row">
              <div className="col-md-9">
                <div className="detail align-items-center">
                  <div className="row">
                    <div className="col-md-7">
                      <img
                        className="img-fluid productDetailImage"
                        src={product.image}
                        title={product.name}
                        loading="lazy"
                      />
                    </div>
                    <div className="col-md-5 detailArea">
                      <div className="ProductDetailName">
                        <span>{product.name}</span>
                      </div>
                      <div className="ProductDetailPrice">
                        <span>
                          {product.price}
                          {settings.currency}
                        </span>
                      </div>
                      <div className="mt-3">
                        <div className="ProductDetailItem">
                          <span>Brand : {product.brand}</span>
                        </div>
                        <div className="ProductDetailItem">
                          <span>Model : {product.model}</span>
                        </div>
                        <div className="ProductDetailItem">
                          <span>Stock Number : #{product.id}</span>
                        </div>
                      </div>
                      <div className="mt-auto">
                      <div className="delivery">
                      <div className="deliveryTitle">
                          <span>Delivery Options</span>
                        </div>
                        <div className="deliveryTitleDesc">
                          <span>Standard deliveries</span>
                        </div>
                        <div className="deliveryTitleDesc">
                        <span>
                        Expected to arrive on {moment().add(1, 'days').format('dddd, MMMM Do')}.

                        </span>
                        </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => baseStore.addToCart(product)}
                          className="DetailAddCartBtn addCartBtn w-100"
                        >
                          <span>Add to Cart</span>
                        </button>

                        {/* <div className="productDescription mt-3">
                    <p>{product.description}</p>
                    </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <Cart />
              </div>
            </div>
          ) : (
            <div className="detail align-items-center">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        className="img-fluid productDetailImage"
                        src={product.image}
                        title={product.name}
                        loading="lazy"
                      />
                    </div>
                    <div className="col-md-6 detailArea">
                      <div className="ProductDetailName">
                        <span>{product.name}</span>
                      </div>
                      <div className="ProductDetailPrice">
                        <span>
                          {product.price}
                          {settings.currency}
                        </span>
                      </div>
                      <div className="mt-3">
                        <div className="ProductDetailItem">
                          <span>Brand : {product.brand}</span>
                        </div>
                        <div className="ProductDetailItem">
                          <span>Model : {product.model}</span>
                        </div>
                        <div className="ProductDetailItem">
                          <span>Stock Number : #{product.id}</span>
                        </div>
                      </div>
                      <div className="mt-auto">
                      <div className="delivery">
                      <div className="deliveryTitle">
                          <span>Delivery Options</span>
                        </div>
                        <div className="deliveryTitleDesc">
                          <span>Standard deliveries</span>
                        </div>
                        <div className="deliveryTitleDesc">
                        <span>
                        Expected to arrive on {moment().add(1, 'days').format('dddd, MMMM Do')}.

                        </span>
                        </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => baseStore.addToCart(product)}
                          className="DetailAddCartBtn addCartBtn w-100"
                        >
                          <span>Add to Cart</span>
                        </button>

                        {/* <div className="productDescription mt-3">
                    <p>{product.description}</p>
                    </div> */}
                      </div>
                    </div>
                  </div>
                </div>
          )}
        </div>
      <div>
      <div className="detail mt-3">
       <div className="ProductDetailName">
       <span>Product Info</span>
       </div>

       <div className="productDescription mt-2">
        <p>{product.description}</p>
       </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default observer(ProductDetail);
