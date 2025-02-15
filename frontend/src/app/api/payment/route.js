import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  const preference = {
    items: [
      {
        title: `Helado ${body.size}`,
        quantity: 1,
        unit_price: body.price,
        currency_id: "ARS",
      },
    ],
    back_urls: {
      success: "http://localhost:3000/success",
      failure: "http://localhost:3000/failure",
      pending: "http://localhost:3000/pending",
    },
    auto_return: "approved",
  };

  try {
    const res = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer APP_USR-6409897576517181-021517-5d14d207e20737b81c744ee37516d3c7-2272353154`,
      },
      body: JSON.stringify(preference),
    });

    const data = await res.json();
    return NextResponse.json({ init_point: data.init_point });
  } catch (error) {
    console.error("Error creando pago:", error);
    return NextResponse.json({ error: "Error al procesar el pago" }, { status: 500 });
  }
}
