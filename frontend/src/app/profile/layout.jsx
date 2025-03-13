"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfileLayout({ children }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(router.pathname);

  const menuItems = [
    { name: "Información de la cuenta", path: "/profile/infocuenta", icon: "/images/configured.png" },
    { name: "Contacto y dirección", path: "/profile/contactodireccion", icon: "/images/contactodireccion.png" },
    { name: "Mis pedidos", path: "/profile", icon: "/images/mispedidos.png" },
    { name: "Cambiar contraseña", path: "/profile/cambiarcontra", icon: "/images/cambiarcontra.png" },
    { name: "Centro de ayuda", path: "/profile/ayuda", icon: "/images/ayuda.png" },
    { name: "Eliminar tu cuenta", path: "/profile/eliminarcuenta", icon: "/images/eliminet.png" },
  ];

  // Verificar si la ruta actual es la página de ayuda
  const isHelpPage = router.pathname === "/profile/ayuda";

  return (
    <div className="flex flex-col md:flex-row w-[90%] mx-auto my-10 gap-10">
      {/* Sidebar */}
      <aside className="w-full md:w-1/3 bg-white rounded-2xl p-4 shadow-lg">
        <h2 className="text-2xl font-bold text-black mb-4">Mi perfil</h2>
        {menuItems.map((item) => (
          <Link key={item.path} href={item.path} onClick={() => setActiveTab(item.path)}>
            <div className={`flex items-center gap-4 p-3 text-black rounded-lg cursor-pointer 
                ${activeTab === item.path ? "bg-pink-600 text-white" : "hover:bg-gray-200"}`
            }>
              <img src={item.icon} alt={item.name} className="w-8 h-8 rounded-full" />
              <span className="text-lg">{item.name}</span>
            </div>
          </Link>
        ))}
      </aside>

      {/* Contenido Dinámico */}
      <main
        className={`w-full md:w-2/3 bg-white rounded-2xl p-6 shadow-lg ${
          isHelpPage ? "max-h-[70vh] overflow-y-auto" : ""
        }`}
      >
        {children}
      </main>
    </div>
  );
}