import React, { useState } from "react";
import { toast } from "sonner";
import logo from "../../../../public/img/logo.png";
import { Link } from "react-router-dom";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    //REACT_APP_FORWOUD
    fetch(process.env.REACT_APP_FORWOUD, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.msg === "Usuario no encontrado") {
          return toast.error("El usuario no existe");
        }
        toast.success("Correo enviado satisfactoriamente");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ margin: "1rem" }}>
      <Link to={"/"}>
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "90vh" }}
      >
        <div className="text-center" style={{ width: "25rem" }}>
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Ingresa tu correo a recuperar"
            value={email}
            onChange={handleInputChange}
            style={{ marginBottom: "10px" }}
          />
          <button className="btn btn-primary" onClick={handleSubmit}>
            Recuperar Contraseña
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;
