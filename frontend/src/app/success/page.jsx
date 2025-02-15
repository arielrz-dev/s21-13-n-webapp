export default function SuccessPage() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-green-500 text-2xl font-bold">¡Pago exitoso! 🎉</h1>
        <p className="text-lg mt-2">Tu pedido está en camino.</p>
        <a href="/" className="btn btn-primary mt-4">Volver a la tienda</a>
      </div>
    );
  }
  