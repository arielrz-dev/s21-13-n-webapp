export default function FailurePage() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-red-500 text-2xl font-bold">Pago fallido ❌</h1>
        <p className="text-lg mt-2">Hubo un problema con tu pago.</p>
        <a href="/" className="btn btn-primary mt-4">Intentar de nuevo</a>
      </div>
    );
  }
  