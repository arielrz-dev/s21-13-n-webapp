export async function GET() {
    const sizes = [
      { size: "1/4 kg", price: 1500 },
      { size: "1/2 kg", price: 2500 },
      { size: "1 kg", price: 4000 },
    ];
  
    return Response.json(sizes);
  }
  