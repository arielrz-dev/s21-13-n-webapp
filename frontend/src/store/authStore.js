"use client";

import { create } from "zustand";
import Cookies from "js-cookie";

const useAuthStore = create((set) => ({
  user: null,
  token: Cookies.get("token") || null,

  login: (token) => {
    // 1 día (24 horas)
    Cookies.set("token", token, { expires: 1 / 24 }); // 1/24 = 1 día
    set({ token });
  },

  setUser: (userData) => {
    set({ user: userData });
  },

  logout: () => {
    Cookies.remove("token");
    set({ user: null, token: null });
  },
}));

export const fetchUserProfile = async () => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const token = Cookies.get("token");

  if (!token) {
    console.error("No hay token disponible.");
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/info`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      if (response.status === 401) {
        // Token expirado
        console.error("Token expirado o inválido.");
        useAuthStore.getState().logout(); // Cierra la sesión
      } else {
        throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
      }
    }

    const userData = await response.json();
    useAuthStore.getState().setUser(userData);
  } catch (error) {
    console.error("Error al obtener perfil:", error.message || error);
  }
};

export default useAuthStore;