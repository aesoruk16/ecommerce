//
import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

import "./Cart.css";
import CartNumberInput from "../CartNumberInput/CartNumberInput";
import baseStore from "../../stores/base";
import { settings } from "../../brandSettings";

const Cart = ({ col }) => {

  return (
    <div className={col}>
    {baseStore.cart.length==0?null: <div className="CartCard">
      <div className="mb-1"><span className="CartTitle">Cart</span></div>
      
      {baseStore.cart.map((cartItem) => (
        <div className="CartChild">
      <div className="CartInfo">
      <div>
        <span className="CartProductName cartText">{cartItem.name}</span>
        </div>
         <div className="CartProductPriceArea">
         <span className="cartText CartProductPrice">{cartItem.price}{settings.currency}</span>
         </div>
      </div>
         <CartNumberInput product={cartItem} initialValue={cartItem.quantity}/>
      </div>
      ))}
      
      <button type="button" className="addCartBtn" onClick={()=>baseStore.deleteCart()}>
                <span>Delete Items</span>
              </button>
     
    </div>}
    <div className="CartCard">
      <div className="mb-1"><span className="CartTitle">Checkout</span></div>
      <div className="CartChild">
      <div className="CartInfo">
      <span className="totalPriceTitle">Total Price</span>: <span className="totalPrice">{baseStore.calculateTotalPrice()}{settings.currency}</span>
      </div>
    
      </div>
      <button type="button" className="addCartBtn" onClick={()=>baseStore.deleteCart()}>
                <span>Checkout</span>
              </button>
    </div>
    </div>
  );
};

export default observer(Cart);
