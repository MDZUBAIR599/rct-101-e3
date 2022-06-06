import React, { useContext } from "react";
import { Navigate} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";




const RequiredAuth = ({ children }) => {
  const {data}=useContext(AuthContext);
  if(data){
    return children;
  }
  return (
    <Navigate
    to="/login"
    

    />
  )
};

export default RequiredAuth;
