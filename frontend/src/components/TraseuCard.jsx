const ETICHETE_DIFICULTATE = {
  "ușor": { text: "ușor", className: "usor" },
  "mediu": { text: "mediu", className: "mediu" },
  "dificil": { text: "dificil", className: "dificil" },
};

export default function TraseuCard({ traseu }) {
  const dificultate = ETICHETE_DIFICULTATE[traseu.dificultate];

  return (
    <li className={`card${traseu.parcurs ? " completed" : ""}`}>
      <div className="card-header">
        <h3>{traseu.titlu}</h3>
        <span className={`badge badge-${dificultate.className}`}>
          {dificultate.text}
        </span>
      </div>
      <p className="categorie">Masiv: {traseu.masiv}</p>
      <p className="stare-text">
        Stare: {traseu.parcurs ? "Parcurs ✅" : "Planificat ⏳"}
      </p>
    </li>
  );
}
