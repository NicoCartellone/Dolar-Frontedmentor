import HomeClient from "./client";

export default async function Home() {
  const data = await fetch("https://api-dolar-argentina-nu.vercel.app/dolar",{next: {tags: ["matches"]}},
  ).then(
    (res) =>
      res.json() as Promise<
        { id: number; tipo: string; compra: string; venta: string }[]
      >
  );

  const cotizaciones = data
    .filter((cotizacion) =>
      ["blue", "oficial", "bolsa", "liqui", "cripto"].includes(cotizacion.tipo)
    )
    .map((cotizacion) => ({
      nombre: cotizacion.tipo,
      compra: Number(cotizacion.compra),
      venta: Number(cotizacion.venta),
    }));

  return <HomeClient cotizaciones={cotizaciones} />;
}
