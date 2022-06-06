import axios from "axios";
import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext();
const [data,]=useState("");
const cart=()=>{
  useEffect=(()=>{
    axios({
      url:"https://reqres.in/api/login",
      method:"GET"
  
      })
      .then((r)=>{
  
        setdata(r.productId)
        
      })
      .catch((err)=>{})
  },[])
 
}

  export const CartProvider = ({ children }) => 
  {return <CartContext.Provider>{children}</CartContext.Provider>;
}





