import React from "react";
import { useForm } from "react-hook-form";
import { API } from "../../shared/Services/api";
import { useNavigate } from "react-router-dom";


export const LoginForm = () => {
  let navigate = useNavigate();
  const { 
    register, 
    handleSubmit ,
    formState: { errors, isValid },} = useForm({ criteriaMode: "all", mode: "onBlur" });
  

  const onSubmit = (formData) => {
    console.log(formData);
    API.post("users/login", formData).then((response) => {
      console.log(response);

      localStorage.setItem("token", response.data);
      navigate("/");
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        type="email"
        name="email"
        {...register("email", {
          required: true,
          pattern:{
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Recuerda que debe ser un email valido: spotatwork@spotatwork.com"}
        })}
      />
      {errors.email ? (
        <>
          {errors.email.type === "pattern" && (
            <p>{errors.email.message}</p>
          )}
        </>): null } 
      <label>Password</label>
      <input
        type="password"
        name="password"
        {...register("password", {
          required: true,
          pattern:
          { value:  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
          message: 'Recuerda que la contraseña debe tener al menos 8 caracteres, 1 de ellos especial, 1 letra mayuscula, 1 letra minuscula, 1 numero.'}
        })}
      />
        {errors.password ? (
        <>
          {errors.password.type === "pattern" && (
            <p>{errors.password.message}</p>
          )}
        </>): null } 
      <button disabled={!isValid}  className="login__button" type="submit">Login</button>
    </form>
  );
};
