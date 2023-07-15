"use client";

import Form from "../components/Form";
import { useState } from "react";
import { Cotizacion } from "../types";

export default function HomeClient({cotizaciones}: {cotizaciones: Cotizacion[]}) {
  const [amount, setAmount] = useState(0);

  return (
    <main className="grid h-full gap-4 md:flex">
      <section className="flex-1">
        <Form
          value={amount}
          onChange={(_amount: number) => setAmount(_amount)}
        />
        <section className="mt-5">
            <h3 className="mb-5 text-3xl">Conversión</h3>
        <ul className="flex flex-col gap-5">
          {cotizaciones.map(({nombre, venta}) => {
            const total = amount
              ? Number(amount / venta)
              : venta;
            return (
              <li
                key={nombre}
                className="flex items-center justify-between mx-10"
              >
                <div className="text-sm capitalize text-[#000]">
                  Dólar {nombre}
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
              </li>
            );
          })}
        </ul>
        </section>
      </section>
      <section className="flex-1 p-8 overflow-y-auto text-white bg-[#00474B] rounded-3xl">
        <h3 className="mb-5 text-3xl text-center text-bold">Cotización</h3>
        <ul className="flex flex-col gap-10">
          {cotizaciones.map(({nombre, venta}) => {
            const total = amount
              ? Number(amount / venta)
              : venta;
            return (
              <li
                key={nombre}
                className="flex items-center justify-between"
              >
                <div className="text-sm capitalize text-[#f9ffff]">
                  Dólar {nombre}
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#21c5ad]">
                    {Number(venta).toLocaleString("es-AR", {
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
