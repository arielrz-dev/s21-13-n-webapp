export default function PendingPage() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-yellow-500 text-2xl font-bold">Pago pendiente ⏳</h1>
        <p className="text-lg mt-2">Estamos esperando la confirmación del pago.</p>
        <a href="/" className="btn btn-primary mt-4">Volver a la tienda</a>
      </div>
    );
  }
  