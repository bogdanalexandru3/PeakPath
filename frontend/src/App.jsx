import { useState } from "react";
import TraseeList from "./components/TraseeList.jsx";

const TRASEE_INITIALE = [
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

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [trasee, setTrasee] = useState(TRASEE_INITIALE);
  const [tema, setTema] = useState(temaInitiala);
  const planificate = trasee.filter((traseu) => !traseu.parcurs).length;

  function handleToggle(id) {
    setTrasee((prev) =>
      prev.map((traseu) =>
        traseu.id === id
          ? { ...traseu, parcurs: !traseu.parcurs }
          : traseu,
      ),
    );
  }

  function handleDelete(id) {
    setTrasee((prev) => prev.filter((traseu) => traseu.id !== id));
  }

  function handleTema() {
    const nouaTema = tema === "dark" ? "light" : "dark";
    setTema(nouaTema);
    document.documentElement.dataset.theme = nouaTema;
  }

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        <h1>PeakPath</h1>
        <p>Jurnalul tău de trasee montane</p>
        <p className="app-count">
          {trasee.length} trasee, dintre care {planificate} planificate
        </p>
      </header>
      <main className="container">
        <section className="panel trails-list">
          <h2>Traseele mele</h2>
          <TraseeList
            trasee={trasee}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </>
  );
}
