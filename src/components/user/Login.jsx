import React, { useState } from "react";
import { useForm } from "../../Hooks/useForm";
import { Global } from "../Helpers/Global";

export const Login = () => {
  const [saved, setSaved] = useState("not_sended");
  const { form, changed } = useForm({});
  const [message, setMessage] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    let userToLogin = form;

    const request = await fetch(Global.url + "user/login", {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify(userToLogin),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await request.json();
    console.log(data.message);

    if (data.status == "success") {
      //persistir los datos en el navegador
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setSaved("saved");
      setMessage(data.message);
    } else {
      setSaved("error");
      setMessage(data.message);
    }

    //  console.log(form);
  };

  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Login</h1>
      </header>
      <div className="content__posts">
        {saved == "saved" ? (
          <strong className="alert alert-success">Logueado con exito</strong>
        ) : (
          ""
        )}
        {saved == "error" ? (
          <strong className="alert alert-danger">{message}</strong>
        ) : (
          ""
        )}
        <form className="form-login" onSubmit={loginUser}>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" onChange={changed} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña: </label>
            <input type="password" name="password" onChange={changed} />
          </div>

          <input
            type="submit"
            value="Indentificate"
            className="btn btn-success"
          />
        </form>
      </div>
    </>
  );
};
