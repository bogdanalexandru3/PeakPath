import TraseeList from "./components/TraseeList.jsx";

const trasee = [
  {
    id: 1,
    titlu: "Creasta Pietrei Craiului",
    masiv: "Piatra Craiului",
    dificultate: "dificil",
    parcurs: true,
  },
  {
    id: 2,
    titlu: "Cabana Mălăiești",
    masiv: "Bucegi",
    dificultate: "ușor",
    parcurs: false,
  },
  {
    id: 3,
    titlu: "Vârful Moldoveanu",
    masiv: "Făgăraș",
    dificultate: "mediu",
    parcurs: false,
  },
];

export default function App() {
  const planificate = trasee.filter((traseu) => !traseu.parcurs).length;

  return (
    <>
      <header className="app-header">
        <h1>PeakPath</h1>
        <p>Jurnalul tău de trasee montane</p>
        <p className="app-count">
          {trasee.length} trasee, dintre care {planificate} planificate
        </p>
      </header>
      <main className="container">
        <section className="panel trails-list">
          <h2>Traseele mele</h2>
          <TraseeList trasee={trasee} />
        </section>
      </main>
    </>
  );
}
