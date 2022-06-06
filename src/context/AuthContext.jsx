import React, { createContext } from "react";
import { useState } from "react";
import axios from"axios"
import { useEffect } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {


  const [data,setdata]=useState("");
 
  const login=()=>{
    useEffect=(()=>{
      axios({
        url:"https://reqres.in/api/login",
        method:"GET"
    
        })
        .then((r)=>{
    
          setdata(r.data.data)
          
        })
        .catch((err)=>{})
    },[])
   
  }
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
