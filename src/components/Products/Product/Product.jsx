import React, { useState } from "react";

const Product = () => {
 const [count, setcount]=useState(1);
 const [decr, setdecr]=useState(1);
 const [del, setdel]=useState(1);
 const count=()=>{
  setcount=count+1;

 }
 const decrement=()=>{
  setdecr-1;
 }
 const delete=()=>{
    setdel-1
 }
  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{"productId"}</h3>
      <h6 data-cy="product-description"></h6>
      <button data-cy="product-add-item-to-cart-button"></button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={"count"}>Count</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={"decrement"}></button>
        <button data-cy="product-remove-cart-item-button" onClick={"delete"}>Delete</button>
      </div>
    </div>
  );
};

export default Product;
