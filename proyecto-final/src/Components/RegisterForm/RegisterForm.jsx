import React from "react";
import { useForm } from "react-hook-form";
import { API } from "../../shared/Services/api";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ criteriaMode: "all", mode: "onBlur" });

  console.log(errors.password)

  const onSubmit = (formData) => {
    console.log(formData);
    API.post("users/register", formData).then((response) => {
      console.log(response);

      navigate("/login");
    });
  };

  return (
    <div className="formContainer">
   
    <form className="formInfo" onSubmit={handleSubmit(onSubmit)}>
    <h3 className="login">Registrarse</h3>
      <label>Nombre</label>
      <input className="inputEmail"
        type="text"
        name="name"
        {...register("name", { 
          required: true,})}
      />
      <label>Email</label>
      <input className="inputEmail"
        type="email"
        name="email"
        {...register("email", {
          required: true,
          pattern:{
            value :/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message : '🚨 Chequear que el email es correcto'
            }
        })}
      />
      {errors.email ? (
                <>
                  {errors.email.type === "pattern" && (
                    <p className="errorFrase">
                      {errors.email.message}
                    </p>
                  )}
                </>
              ) : null}
      <label>Contraseña</label>
      <input className="inputPassword"
        type="password"
        name="password"
        {...register("password", {
          required: true,
          pattern:
          {  value : /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
            message : '🚨 Recuerda que la contraseña debe tener al menos 8 caracteres y maximo 12, 1 de ellos especial, 1 letra mayuscula, 1 letra minuscula, 1 numero.'}
        })}
      />
       {errors.password ? (
                <>
                  {errors.password.type === "pattern" && (
                    <p className="errorFrase">
                      {errors.password.message}
                    </p>
                  )}
                </>
              ) : null}
              <button
              disabled={!isValid}
              className="button-19"
              type="submit"
            >
      Register
      </button>
    </form>
    </div>
  );
};
