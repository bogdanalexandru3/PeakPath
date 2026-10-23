const ETICHETE_DIFICULTATE = {
  "Ușor": { text: "Ușor", className: "usor" },
  Mediu: { text: "Mediu", className: "mediu" },
  Dificil: { text: "Dificil", className: "dificil" },
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
