import React, { useState } from "react";
import { useForm } from "../../Hooks/useForm";
import { Global } from "../Helpers/Global";

export const Register = () => {
  const { form, changed } = useForm({});
  const [saved, setSaved] = useState("not_sended");
  const [message, setMessage] = useState("");
  const saveUser = async (e) => {
    //evita que recargue la pantalla
    e.preventDefault();
    //Recoger datos del formulario
    let newUser = form;

    console.log(newUser);
    //guardar datos en el backend - envio de informacion a la api
    const request = await fetch(Global.url + "user/register", {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify(newUser),
      credentials: "same-origin",

      headers: {
        "content-type": "application/json",
      },
    });
    //console.log(request); como no enviaba el body de volvia un error 400 es que algo va mal en la data
    const data = await request.json();
    console.log(data);

    if (data.status == "success") {
      setSaved("saved");
      setMessage(data.message);
    } else {
      setMessage(data.message);
      setSaved("error");
    }
  };

  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Registro</h1>
      </header>

      <div className="content__posts">
        {saved == "saved" ? (
          <strong className="alert alert-success">{message}</strong>
        ) : (
          ""
        )}
        {saved == "error" ? (
          <strong className="alert alert-danger"> {message}</strong>
        ) : (
          ""
        )}

        <form className="register-form" onSubmit={saveUser}>
          <div className="form-group">
            <label htmlFor="name"> Nombre</label>
            <input type="text" name="name" onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Apellido</label>
            <input type="text" name="surname" onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="nick">Nick</label>
            <input type="text" name="nick" onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="email"> Email </label>
            <input type="email" name="email" onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="password"> Contraseña </label>
            <input type="password" name="password" onChange={changed} />
          </div>

          <input type="submit" value="Registrar" className="btn btn-success" />
        </form>
      </div>
    </>
  );
};
