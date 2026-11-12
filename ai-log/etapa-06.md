# Jurnal AI - Etapa 6

## Context
Am folosit asistența AI pentru a implementa cerințele Etapei 6 (Date de la un API folosind useEffect și json-server) adaptate la tema aplicației PeakPath (jurnal de trasee montane).

## Pași realizați cu ajutorul AI
- Instalarea și configurarea dependenței `json-server@0.17.4` în `frontend/package.json` cu scriptul dedicat `"api": "json-server --watch db.json --port 3001"`.
- Crearea bazei de date mock `frontend/db.json` cu resursa `trasee`, conținând 5 trasee montane cu stări și dificultăți variate.
- Crearea modulului `frontend/src/api.js` pentru izolarea apelurilor HTTP `fetch`, verificarea răspunsului prin `res.ok` și citirea adresei din variabila de mediu `VITE_API_URL` (fallback `http://localhost:3001`).
- Crearea fișierului `frontend/.env.example` pentru documentarea variabilei de mediu.
- Modificarea componentei `frontend/src/App.jsx`:
  - Inițializarea stării `trasee` cu `[]` (datele nu mai sunt hardcodate în codul React).
  - Adăugarea stărilor `loading` și `error`.
  - Implementarea `useEffect` cu funcție asincronă interioară și mecanism de curățare (`ignore`) pentru prevenirea race condition-urilor și tratarea montării duble din React 19 / StrictMode.
  - Afișarea celor trei stări: încărcare, eroare explicită (cu sugestie de rulare `npm run api`), și date încărcate.
- Actualizarea `frontend/src/App.css` cu clasele `.info` și `.error`, culori și variabile CSS pentru temele light și dark (`--muted`, `--error-bg`, `--error-border`).
- Documentarea modului de rulare în două terminale și a stadiului în `README.md`.

## Verificare
- `npm run lint` a trecut fără erori sau avertismente.
- `npm run build` a compilat fără probleme.
- Endpoint-ul `http://localhost:3001/trasee` furnizează datele în format JSON conform cerințelor.
