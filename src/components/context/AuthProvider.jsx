import React, { createContext, useEffect, useState } from "react";
import { Global } from '../Helpers/Global';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [compartido, setCompartid] = useState(
    "compartido en todoss los componentes"
  );

  const [auth, setAuth] = useState({});
  const [counters, setCounters] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    authUser();


  }, []);

  const authUser = async () => {

    // sacar datos usuario identificado del localstorage 
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");


    //comprobar si tengo el token y el user
    if (!token || !user) {
      setLoading(false);
      return false;
    }


    //Transformar los datos a un objeto de javascript 

    const userObj = JSON.parse(user);
    const userId = userObj.id;

    //peticion ajax al backend pque compruebe el token y que me devuelva todos los datos del usuario
    const request = await fetch(Global.url + "user/profile/" + userId, {
      method: "GET",
      headers: {
        "Content-Type": "application-json",
        Autorization: token
      },

    });

    const data = await request.json();

    // console.log(data.user);



    //peticion ajax al backend pque compruebe el token y que me devuelva todos los datos del usuario
    const request2 = await fetch(Global.url + "user/counters/" + userId, {
      method: "GET",
      headers: {
        "Content-Type": "application-json",
        Autorization: token
      },

    });

    const dataCounters = await request2.json();








    //setear el estado de auth
    setAuth(data.user);
    setCounters(dataCounters);
    setLoading(false);








  };


  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        counters,
        loading,
        setCounters
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
