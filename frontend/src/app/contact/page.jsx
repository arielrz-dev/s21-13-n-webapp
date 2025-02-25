import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat pt-16 text-white"
      style={{ backgroundImage: "url('/FOOTER.jpg')" }}
    >
      {/* Capa de fondo con transparencia */}
      <div className="absolute inset-0 bg-blue-900 opacity-80"></div>

      <div className="relative z-20 mx-auto max-w-6xl px-6">
        {/* Primera sección */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="flex items-center space-x-3">
            <span className="text-8xl font-bold">@</span>
            <div className="text-3xl font-bold leading-tight">
              <div>Your</div>
              <div>Company</div>
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            <h3 className="text-lg font-semibold">Síguenos en:</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <Facebook
                  size={32}
                  className="text-white hover:text-blue-500"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <Instagram
                  size={32}
                  className="text-white hover:text-pink-500"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Línea separadora */}
        <hr className="border-t border-white my-8 opacity-50" />

        {/* Contenedor de columnas */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-base md:text-lg font-medium">
          {/* Mis Cuentas */}
          <div>
            <h3 className="text-xl font-bold mb-3">Mis Cuentas</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-300 transition-colors cursor-pointer">
                Mis Órdenes
              </li>
              <li className="hover:text-blue-300 transition-colors cursor-pointer">
                Carrito de Compras
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-xl font-bold mb-3">Empresa</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-300 transition-colors cursor-pointer">
                Sobre Nosotros
              </li>
              <li className="hover:text-blue-300 transition-colors cursor-pointer">
                Contáctanos
              </li>
              <li className="hover:text-blue-300 transition-colors cursor-pointer">
                Productos
              </li>
              <li className="hover:text-blue-300 transition-colors cursor-pointer">
                Sabores
              </li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h3 className="text-xl font-bold mb-3">Información</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-300 transition-colors cursor-pointer">
                Sucursales
              </li>
              <li className="hover:text-blue-300 transition-colors cursor-pointer">
                Cómo Comprar
              </li>
              <li className="hover:text-blue-300 transition-colors cursor-pointer">
                Pago y Envío
              </li>
              <li className="hover:text-blue-300 transition-colors cursor-pointer">
                Bases y Condiciones
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-3">Suscríbete</h3>
            <p className="text-gray-300 text-base mb-3">
              Recibe nuestras últimas ofertas y novedades.
            </p>
            <div className="flex bg-white rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full px-3 py-2 text-gray-800 outline-none"
              />
              <button className="bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs mt-12 opacity-75">
          © {new Date().getFullYear()} Your Company. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
