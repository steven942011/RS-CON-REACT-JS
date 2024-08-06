import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [compartido, setCompartid] = useState(
    "compartido en todoss los componentes"
  );
  return (
    <AuthContext.Provider
      value={{
        compartido,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
