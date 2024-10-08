import React from "react";
import { Routes, Route, BrowserRouter, Navigate, Link } from "react-router-dom";
import { PublicLayout } from "../components/layout/public/PublicLayout";
import { Login } from "../components/user/Login";
import { Register } from "../components/user/Register";
import { PrivateLayout } from "../components/layout/private/PrivateLayout";
import { Feeds } from "../components/publication/Feeds";
import { AuthProvider } from "../components/context/AuthProvider";
import { Logout } from "../components/user/Logout";
export const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="registro" element={<Register />} />
          </Route>

          <Route path="/social" element={<PrivateLayout />}>
            <Route index element={<Feeds />} />
            <Route path="feed" element={<Feeds />} />
            <Route path="logout" element={<Logout/>}/>
          </Route>
          <Route
            path="*"
            element={
              <>
                <p>
                  <h1>ERROR 404</h1>
                  <Link to="/">Volver al inicio</Link>
                </p>
              </>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
