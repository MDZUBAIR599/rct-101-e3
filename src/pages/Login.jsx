import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Login = () => {
  
const [logindetails,setlogin]=useState({});
const {login}=useContext(AuthContext)
const onchange=(e)=>{
  setlogin({
    ...logindetails,
    // [name]:value,
  })
}
const submit=(e)=>{
  e.preventDefault();
  login()
}
  return (
    <div>
      <form onSubmit={submit}>
      <input data-cy="login-email" type="text" onChange={onchange} /><br/>
      <input data-cy="login-password" type="password"  onChange={onchange}/><br/>
      <button data-cy="login-submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
