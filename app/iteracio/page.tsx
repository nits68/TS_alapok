export default function IteracioPage() {
  // LNKO - Kivonásos algoritmus - Elöltesztelő ciklus
  let a: number = 13;
  let b: number = 97;
  const eretetiA: number = a;
  const eretetiB: number = b;
  while (a !== b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  console.log("LNKO(12,8) = " + a);
  console.log("LNKO(12,8) = " + b);
  const lnko: number = a;

  // LNKO - Euklideszi algoritmus - Hátultesztelő ciklus
  let a2: number = 130;
  let b2: number = 25;
  const eretetiA2: number = a2;
  const eretetiB2: number = b2;
  let m: number = 0;
  do {
    m = a2 % b2; // osztás maradéka
    a2 = b2; // Előző "kör" maradéka
    b2 = m;
  } while (m != 0);
  const lnko2: number = a2;
  console.log("LNKO() = " + a2);
  console.log("LNKO() = " + b2); // Itt már nulla a "b2" értéke

  // Növekményes ciklus (for ciklus, számláló vezérelt ciklus)
  // Faktoriális meghatározása
  // n!=?
  const n: number = 8250;
  let faktor: bigint = 1n; // 1n és 2n a bigint lierálokat jeleni
  for (let e = 2n; e <= n; e++) {
    // n egy egyszerű változó n! jelölés végett használtuk
    faktor = faktor * e;
  }

  let db = 0; // "l" betűk számát tároló változó
  const szöveg = "Hello 13KE";
  for (const e of szöveg) {
    if (e === "l") db++;
    console.log(e);
  }
  console.log('Az "l" betűk száma: ' + db + "db");
  console.log("Az \"l\" betűk száma: " + db + "db");
  console.log(`Az "l" betűk száma: ${db}db`);

  return (
    <>
      <p>Iterációk (ciklusok)</p>
      <p>
        LNKO({eretetiA},{eretetiB}) = {lnko}
      </p>
      <p>
        LNKO2({eretetiA2},{eretetiB2}) = {lnko2}
      </p>
      <p className="wrap-break-word">
        {n}! = {faktor}
      </p>
    </>
  );
}
