"use client";
import React from 'react';

export default function Ayuda() {
  return (
    <div className="bg-white flex justify-center items-center p-6">
      <div className="w-full bg-white rounded-2xl p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-600 text-center mb-6">
          Guía de Uso – Heladería Fresko
        </h1>
        <p className="text-gray-700 mb-6">
          Bienvenido a Fresko, tu tienda en línea de helados. Aquí te explicamos cómo navegar en la página y realizar tu compra de manera fácil y rápida.
        </p>

        {/* Contenedor del contenido con altura máxima y scroll */}
        <div className="space-y-6 max-h-[70vh] overflow-y-auto">
          <section>
            <h2 className="text-xl font-bold text-pink-600 mb-2">1. Registro e Inicio de Sesión</h2>
            <p className="text-gray-700 mb-2">Para una mejor experiencia, puedes crear una cuenta o iniciar sesión en la plataforma:</p>
            <ol className="list-decimal list-inside text-gray-700 pl-4">
              <li>Haz clic en "Iniciar Sesión" en la parte superior derecha de la página.</li>
              <li>Si ya tienes una cuenta, ingresa tu correo electrónico y contraseña.</li>
              <li>Si no tienes cuenta, selecciona "Registrarse", completa los datos requeridos y confirma tu registro.</li>
              <li>Una vez logueado, tendrás acceso a una experiencia más personalizada y con menos pasos en el proceso de compra.</li>
            </ol>
            <p className="text-gray-700 font-bold mt-2">Nota: También puedes realizar compras sin registrarte, pero se te pedirá más información al momento del pago.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-pink-600 mb-2">2. Exploración del Menú y Catálogo de Productos</h2>
            <ol className="list-decimal list-inside text-gray-700 pl-4">
              <li>Dirígete a la barra de navegación en la parte superior de la página.</li>
              <li>Haz clic en la opción "Menú" para acceder a nuestro catálogo de helados y productos.</li>
              <li className='mb-2'>Verás una lista de categorías como:</li>
              <ol className='list-disc list-inside text-gray-700 pl-6'>
                <li>Helados</li>
                <li>Postres</li>
                <li>Tortas</li>
                <li className='mb-2'>Milkshakes, etc.</li>
              </ol>
              <li>Selecciona una categoría para ver los productos disponibles.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-pink-600 mb-2">3. Selección de Productos</h2>
            <ol className="list-decimal list-inside text-gray-700 pl-4">
              <li>Una vez dentro de una categoría, revisa los productos disponibles con sus precios e imágenes.</li>
              <li>Haz clic en un producto para ver su detalle completo, incluyendo descripción, tamaño y opciones de personalización (si aplica).</li>
              <li>Si deseas comprarlo, selecciona la cantidad y haz clic en "Agregar al carrito".</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-pink-600 mb-2">4. Gestión del Carrito de Compras</h2>
            <ol className="list-decimal list-inside text-gray-700 pl-4">
              <li>Para revisar los productos que has agregado, haz clic en el ícono del carrito de compras en la parte superior derecha.</li>
              <li className='mb-2'>Aquí puedes:</li>
              <ol className='list-disc list-inside text-gray-700 pl-6'>
                <li>Modificar la cantidad de productos.</li>
                <li>Eliminar productos del carrito.</li>
                <li className='mb-2'>Ver el total de la compra antes de impuestos y envío.</li>
              </ol>
              <li>Cuando estés listo, haz clic en "Ir a pagar".</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-pink-600 mb-2">5. Proceso de Pago</h2>
            <p className="text-gray-700 mb-2">Dependiendo de si estás logueado o compras como invitado, se te pedirá distinta información:</p>
            <ol className='list-disc list-inside text-gray-700 pl-4'>
              <li>Si estás logueado: Tus datos de contacto y dirección ya estarán guardados, por lo que el proceso será más rápido.</li>
              <li>Si no estás logueado: Se te solicitarán los siguientes datos:</li>
              <ol className='list-disc list-inside text-gray-700 pl-6'>
                <li className='mt-2'>Nombre completo</li>
                <li>Número de teléfono</li>
                <li className='mb-2'>Dirección de entrega</li>
              </ol>
            </ol>
            <p className="text-gray-700 ">Una vez completados los datos:</p>
            <ol className="list-decimal list-inside text-gray-700 pl-4">
              <li>Selecciona el método de entrega:</li>
              <ol className='list-disc list-inside text-gray-700 pl-6'>
                <li className='mt-2'>Recoger en tienda: Puedes visitar nuestro local y retirar tu pedido sin costo adicional.</li>
                <li className='mb-2'>Delivery: Te enviaremos tu pedido a la dirección indicada (puede tener un costo adicional).</li>
              </ol>
              <li>Elige el método de pago disponible.</li>
              <li>Confirma tu pedido haciendo clic en "Realizar pago".</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-pink-600 mb-2">6. Confirmación y Seguimiento del Pedido</h2>
            <ol className="list-decimal list-inside text-gray-700 pl-4">
              <li>Una vez realizado el pago, recibirás un correo de confirmación con los detalles de tu compra.</li>
              <li>Si seleccionaste "Delivery", recibirás una notificación cuando tu pedido esté en camino.</li>
              <li>Si seleccionaste "Recoger en tienda", recibirás un aviso cuando tu pedido esté listo para ser retirado.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-pink-600 mb-2">7. Preguntas Frecuentes (FAQ)</h2>
            <h2 className="text-lg font-bold text-pink-600">¿Puedo comprar sin registrarme?</h2>
            <p className="text-gray-700 mb-2">Sí, puedes comprar como invitado, pero deberás ingresar tu información manualmente en cada compra.</p>
            <h2 className="text-lg font-bold text-pink-600">¿Qué métodos de pago aceptan?</h2>
            <p className="text-gray-700 mb-2">Aceptamos pagos con tarjeta de crédito/débito, transferencia bancaria y pagos en efectivo en tienda.</p>
            <h2 className="text-lg font-bold text-pink-600">¿Cómo funciona el servicio de delivery?</h2>
            <p className="text-gray-700 mb-2">El servicio de delivery está disponible en zonas seleccionadas. El costo y tiempo de entrega dependerán de tu ubicación.</p>
            <h2 className="text-lg font-bold text-pink-600">¿Qué hago si tengo un problema con mi pedido?</h2>
            <p className="text-gray-700 mb-2">Si tienes alguna duda o inconveniente con tu compra, contáctanos a través de nuestro chat de soporte o por correo electrónico.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-pink-600 mb-2">8. Contacto y Soporte</h2>
            <p className="text-gray-700">Si necesitas ayuda adicional, puedes contactarnos a través de:</p>
            <p className="text-gray-700">📧 Correo: soporte@fresko.com</p>
            <p className="text-gray-700">📞 Teléfono: +54 9 11 9999-9999</p>
          </section>
        </div>
      </div>
    </div>
  );
}