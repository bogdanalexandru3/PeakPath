import TraseuCard from "./TraseuCard.jsx";

export default function TraseeList({ trasee, onToggle, onDelete }) {
  if (trasee.length === 0) {
    return <p className="empty">Nu exista trasee adaugate încă.</p>;
  }

  return (
    <ul className="cards-container">
      {trasee.map((traseu) => (
        <TraseuCard
          key={traseu.id}
          traseu={traseu}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
