import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    
    if (!body.items || body.items.length === 0) {
      return NextResponse.json({ error: "El carrito está vacío." }, { status: 400 });
    }
    
    const preference = {
      items: body.items.map(item => ({
        title: item.productName,
        quantity: item.amount,
        unit_price: item.productPrice,
        currency_id: "ARS",
      })),
      back_urls: {
        success: "https://heladeria-deploy.vercel.app/success",
        failure: "https://heladeria-deploy.vercel.app/failure",
        pending: "https://heladeria-deploy.vercel.app/pending",
      },
      auto_return: "approved",
    };

    const res = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer APP_USR-6409897576517181-021517-5d14d207e20737b81c744ee37516d3c7-2272353154`,
      },
      body: JSON.stringify(preference),
    });

    const data = await res.json();
    
    if (!res.ok) {
      throw new Error(data.message || "Error al crear la preferencia de pago");
    }

    return NextResponse.json({ init_point: data.init_point });
  } catch (error) {
    console.error("Error procesando el pago del carrito:", error);
    return NextResponse.json({ error: "Error al procesar el pago" }, { status: 500 });
  }
}
