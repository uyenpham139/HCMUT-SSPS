"use client";
import React, { useState } from 'react';

const PaperBox = ({ paperType, initialQuantity = 0, price }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleDelete = () => {
    setQuantity(0);
  };

  if (quantity === 0) return null;

  return (
    <div className="paper-box">
      <button onClick={handleDelete} className="delete-btn">X</button>
      <span>{paperType}</span>
      <div className="quantity">
        <button onClick={handleDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
      <span>{price} VND</span>
    </div>
  );
};

export default PaperBox;
