"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../UI/Input";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoIosRefresh } from "react-icons/io"; // Para el spinner
import { toast } from "react-toastify";

export function RegisterForm({ setCurrentForm }) {
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controlar el envío
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Manejamos el envío del formulario
  const onSubmit = async (data) => {
    console.log("Datos enviados:", data);
    setIsSubmitting(true); // Inicia el envío

    try {
      const response = await fetch(`${API_BASE_URL}/register`,
        // "https://intimate-chinchilla-equipo-s21-13-n-webapp-f92794e5.koyeb.app/api/v1/register",     
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        // console.log("Registro exitoso:", result);
        toast.success("Registro exitoso");

        // Cambia el formulario 'login'
        setCurrentForm("login");
      } else {
        // console.error("Error en el registro");
        toast.error("Hubo un problema, intenta nuevamente");
      }
    } catch (error) {
      console.error("Error en la conexión:", error);
    } finally {
      setIsSubmitting(false); // Termina el envío, ya sea con éxito o error
    }
  };

  return (
    <div>
      <h3 className="text-lg font-bold text-center text-pink-700 lg:text-3xl">Crear Cuenta</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="py-4">
        <Input
          id="username"
          label="Nombre de usuario"
          type="text"
          register={register}
          required="El nombre de usuario es obligatorio"
          minLength={{ value: 3, message: "Debe tener al menos 3 caracteres" }}
          errorMessage={errors.username && errors.username.message}
          placeholder="Tu nombre de usuario"
        />
        <Input
          id="email"
          label="Correo electrónico"
          type="email"
          register={register}
          required="El correo es obligatorio"
          pattern={{
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Correo electrónico no válido",
          }}
          errorMessage={errors.email && errors.email.message}
          placeholder="correo@dominio.com"
        />
        <Input
          id="password"
          label="Contraseña"
          type="password"
          register={register}
          required="La contraseña es obligatoria"
          minLength={{ value: 6, message: "Debe tener al menos 6 caracteres" }}
          errorMessage={errors.password && errors.password.message}
          placeholder="•••••••"
        />
        <button
          type="submit"
          className="btn w-full bg-pink-600 text-white hover:bg-pink-700"
          disabled={isSubmitting} // Deshabilita el botón mientras se está enviando
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center text-pink-600">
              <IoIosRefresh className="animate-spin mr-2" />
              Registrando...
            </span>

          ) : (
            "REGISTRAME"
          )}
        </button>
      </form>

      <div className="text-center justify-around flex items-center">
        <span className="text-black text-sm">¿Ya tienes una cuenta? </span>
        <button onClick={() => setCurrentForm("login")} className="font-semibold text-black hover:text-pink-700 underline">
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}
