"use client";
import React from "react";
import useAuthStore from "@/store/authStore";

export default function Profile() {
  const { user } = useAuthStore(); // Accede a los datos del usuario desde Zustand

  if (!user) return <p>Cargando...</p>;

  return (
    <div className="container mx-auto p-4 text-black">
      <h1 className="card-title">Bienvenido, {user.username}!</h1>
      <p>Email: {user.email}</p>
      <p>Dirección: {user.address}</p>
      <p>Rol: {user.role}</p>
    </div>
  );
  
}
