import React, { useState, useEffect } from "react";
import "./CartNumberInput.css";
import baseStore from "../../stores/base";

function CartNumberInput({ initialValue = 0 ,product}) {
  const [number, setNumber] = useState(initialValue);

  useEffect(() => {
    setNumber(initialValue);
  }, [initialValue]);

  const handleIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
    baseStore.addToCart(product,1)
  };

  const handleDecrease = () => {
    setNumber((prevNumber) => (prevNumber > 0 ? prevNumber - 1 : 0));
    baseStore.addToCart(product,0)

  };

  const handleChange = (e) => {
    const inputValue = parseInt(e.target.value, 10) || 0;
    setNumber(inputValue);
  };

  return (
    <div className="numberInput">
      <button className="cartBtn" onClick={handleDecrease}>
        -
      </button>
      <input
        type="text"
        className="cartNumberInput"
        readOnly
        value={number}
        onChange={handleChange}
        inputMode="numeric"
      />
      <button className="cartBtn" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}

export default CartNumberInput;
