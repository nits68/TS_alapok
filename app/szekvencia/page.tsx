// függvény fej
// (a: number, b: number) -> formális paraméterlista
// : number -> függvény visszatérési értékének a típusa
function terület(a: number, b: number): number {
  // függvény törzs
  return a * b; // a * b fg. visszatérési értéke
}

function kerület(a: number, b: number): number {
  return 2 * (a + b);
}

export default function SzekvenciaPage() {
  // példa szekvenciára:
  const a: number = 12;
  const b: number = 34;
  const ter: number = terület(a, b);
  // const ker: number = kerület(a, b);
  return (
    <>
      <h1>Téglalap területe és kerülete</h1>
      <p>Kérem az oldalak hosszát!</p>
      <p>a = {a}</p>
      <p>b = {b}</p>
      <p>T = {ter}</p>
      <p>K = {kerület(a, b)}</p>
    </>
  );
}
