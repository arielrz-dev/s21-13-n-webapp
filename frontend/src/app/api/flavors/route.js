export async function GET() {
    const flavors = [
      "Chocolate",
      "Vainilla",
      "Frutilla",
      "Dulce de Leche",
      "Menta Granizada",
      "Limon",
      "Cookies",
      "Maracuya",
      "Crema Americana",
    ];
  
    return Response.json(flavors);
  }
  