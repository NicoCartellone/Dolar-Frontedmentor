"use client";

import cotizacion from "./mocks/cotizaciones.json";
import Form from "./components/Form";
import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState(0);

  return (
    <main className="flex h-full gap-4">
      <section className="flex-1">
        <Form
          value={amount}
          onChange={(_amount: number) => setAmount(_amount)}
        />
      </section>
      <section className="flex-1 p-8 overflow-y-auto text-white bg-[#00474B] rounded-3xl">
        <ul className="flex flex-col gap-4">
          {cotizacion.map((cotizacion) => {
            const total = amount
              ? Number(amount / Number(cotizacion.venta))
              : cotizacion.venta;
            return (
              <li
                key={cotizacion.id}
                className="flex items-center justify-between"
              >
                <div className="text-sm capitalize text-[#f9ffff]">
                  Dólar {cotizacion.tipo}
                </div>
                <div className="flex gap-4">
                  {amount ? (
                    <div className="text-xl font-bold text-[#5d9093]">
                      {Number(total).toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      })}
                    </div>
                  ) : null}
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#21c5ad]">
                    {Number(cotizacion.venta).toLocaleString("es-AR", {
                      style: "currency",
                      currency: "ARS",
                    })}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
