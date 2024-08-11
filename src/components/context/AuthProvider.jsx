import React, { createContext, useEffect, useState } from "react";
import {Global} from '../Helpers/Global';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [compartido, setCompartid] = useState(
    "compartido en todoss los componentes"
  );
  
  const [auth, setAuth] =  useState({});

  useEffect(()=>{
    
    authUser();


  },[]);

  const authUser = async()=>{

    // sacar datos usuario identificado del localstorage 
   const token = localStorage.getItem("token");
   const user = localStorage.getItem("user");
    

    //comprobar si tengo el token y el user
if(!token || !user){
  return false;
}


    //Transformar los datos a un objeto de javascript 

const userObj = JSON.parse(user);
const userId = userObj.id;

    //peticion ajax al backend pque compruebe el token y que me devuelva todos los datos del usuario
    const request = await fetch(Global.url+"user/profile/"+userId,{
      method:"GET",
      headers:{
        "Content-Type":"application-json",
         Autorization: token
      }, 
     
    });
    
const data = await request.json();

   console.log(data.user);

   
   //setear el estado de auth
   setAuth(data.usery);
  };


  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
