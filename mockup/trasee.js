// --- 1. Datele de test și Constantele ---
const DIFICULTATI = ["Ușor", "Mediu", "Dificil"];

const trasee = [
    { id: 1, titlu: "Creasta Pietrei Craiului", masiv: "Piatra Craiului", dificultate: "Dificil", parcurs: true },
    { id: 2, titlu: "Cabana Mălăiești", masiv: "Bucegi", dificultate: "Ușor", parcurs: false },
    { id: 3, titlu: "Vârful Moldoveanu", masiv: "Făgăraș", dificultate: "Mediu", parcurs: false }
];

// --- 2. Funcțiile Aplicației ---

// Listează doar titlurile traseelor (folosim map)
function listeazaTitluri(lista) {
    return lista.map((t) => t.titlu);
}

// Numără traseele neparcurse (planificate) (folosim filter și length)
function numaraPlanificate(lista) {
    return lista.filter((t) => !t.parcurs).length;
}

// Caută trasee după titlu (case insensitive)
function cautaDupaTitlu(lista, text) {
    return lista.filter((t) => 
        t.titlu.toLowerCase().includes(text.toLowerCase())
    );
}

// Calculează următorul ID disponibil (folosind reduce, previne conflictele)
function nextId(lista) {
    return lista.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}

// Adaugă un traseu nou cu validări
function adaugaTraseu(lista, titlu, masiv, dificultate) {
    const titluCurat = titlu.trim();
    
    // Validare 1: Titlul nu poate fi gol
    if (!titluCurat) {
        console.warn("Titlul nu poate fi gol!");
        return lista;
    }
    
    // Validare 2: Eticheta trebuie să existe
    if (!DIFICULTATI.includes(dificultate)) {
        console.warn(`Dificultate invalidă: ${dificultate}. Te rog folosește Ușor, Mediu sau Dificil.`);
        return lista;
    }

    // Construcție obiect nou
    const nou = {
        id: nextId(lista),
        titlu: titluCurat,
        masiv: masiv,
        dificultate: dificultate,
        parcurs: false
    };

    // Imutabilitate: returnăm un array NOU
    return [...lista, nou];
}

// Comută starea unui traseu (parcurs / neparcurs)
function comutaParcurs(lista, id) {
    return lista.map((t) => 
        t.id === id ? { ...t, parcurs: !t.parcurs } : t
    );
}

// Șterge un traseu pe baza ID-ului
function stergeTraseu(lista, id) {
    return lista.filter((t) => t.id !== id);
}

// --- 3. Testarea în Consolă ---
console.log("--- Citire ---");
console.log("Titluri trasee:", listeazaTitluri(trasee).join(", "));
console.log("Trasee planificate (active):", numaraPlanificate(trasee));

console.log("Căutare 'cabana':", listeazaTitluri(cautaDupaTitlu(trasee, "cabana")).join(", "));

console.log("\n--- Adăugare ---");
let listaNoua = adaugaTraseu(trasee, "Lacul Bucura", "Retezat", "Ușor");
console.log("Lista nouă are:", listaNoua.length, "trasee");
console.log("Originalul a rămas cu:", trasee.length, "trasee (Test de imutabilitate)");

console.log("\n--- Modificare și Ștergere ---");
listaNoua = comutaParcurs(listaNoua, 2);
console.log("După bifarea traseului cu ID 2 (Mălăiești), planificate:", numaraPlanificate(listaNoua));

listaNoua = stergeTraseu(listaNoua, 1);
console.log("După ștergerea traseului cu ID 1 (Creastă):", listeazaTitluri(listaNoua).join(", "));

console.log("\n--- Validare ---");
adaugaTraseu(listaNoua, "   ", "Bucegi", "Mediu"); // Titlu gol
adaugaTraseu(listaNoua, "Vârful Omu", "Bucegi", "Extrem"); // Etichetă greșită