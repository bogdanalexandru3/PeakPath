const ETICHETE_DIFICULTATE = {
  "ușor": { text: "ușor", className: "usor" },
  "mediu": { text: "mediu", className: "mediu" },
  "dificil": { text: "dificil", className: "dificil" },
};

export default function TraseuCard({ traseu, onToggle, onDelete }) {
  const dificultate = ETICHETE_DIFICULTATE[traseu.dificultate];

  return (
    <li className={`card${traseu.parcurs ? " completed" : ""}`}>
      <div className="card-header">
        <h3>
          <label className="trail-main">
            <input
              type="checkbox"
              checked={traseu.parcurs}
              onChange={() => onToggle(traseu.id)}
            />
            <span>{traseu.titlu}</span>
          </label>
        </h3>
        <div className="card-actions">
          <span className={`badge badge-${dificultate.className}`}>
            {dificultate.text}
          </span>
          <button
            className="btn-danger"
            onClick={() => onDelete(traseu.id)}
            aria-label={`Șterge traseul ${traseu.titlu}`}
          >
            Șterge
          </button>
        </div>
      </div>
      <p className="categorie">Masiv: {traseu.masiv}</p>
      <p className="stare-text">
        Stare: {traseu.parcurs ? "Parcurs ✅" : "Planificat ⏳"}
      </p>
    </li>
  );
}
