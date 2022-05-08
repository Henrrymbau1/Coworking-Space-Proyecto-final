import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { API } from "../../shared/Services/api";
import { useNavigate } from "react-router-dom";
import "./_loginForm.scss"
import { JwtContext } from "../../shared/Context/JwtContext";


export const LoginForm = () => {
  let navigate = useNavigate();
  const { setJwt } = useContext(JwtContext);
  const { 
    register, 
    handleSubmit ,
    formState: { errors},
  } = useForm();
  

  const onSubmit = (formData) => {
    console.log(formData);
    API.post("users/login", formData).then((response) => {
      console.log(response);
      setJwt(response.data);
      localStorage.setItem("token", response.data);
      navigate("/");
     
    });
  };

  return (
    <div className="formContainer">
    
    <form className="formInfo" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="login">Iniciar Sesion</h3>
      <label>Email</label>
      <input className="inputEmail"
        type="email"
        name="email"
        {...register("email", {
          required: true,
          pattern:{
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "🚨 Recuerda que debe ser un email valido: spotatwork@spotatwork.com"}
        })}
      />
      {errors.email ? (
        <>
          {errors.email.type === "pattern" && (
            <p className="errorFrase">{errors.email.message}</p>
          )}
        </>): null } 
      <label>Contraseña</label>
      <input className="inputPassword"
        type="password"
        name="password"
        {...register("password", {
          required: true,
          pattern:
          { value:  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
          message: '🚨 Recuerda que la contraseña debe tener al menos 8 caracteres y maximo 12, 1 de ellos especial, 1 letra mayuscula, 1 letra minuscula, 1 numero.'}
        })}
      />
        {errors.password ? (
        <>
          {errors.password.type === "pattern" && (
            <p className="errorFrase">{errors.password.message}</p>
          )}
        </>): null } 
      <button   className="button-19" type="submit">Iniciar Sesion</button>
    </form>
    </div>
  );
};
