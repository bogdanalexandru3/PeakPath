# PeakPath

##- Etapa 1

PeakPath este o aplicație web care funcționează ca un jurnal de drumeții, permițând utilizatorilor să își țină evidența traseelor montane.

## Modul de rulare
Aplicația rulează cu Vite din folderul `frontend/`:

```sh
cd frontend
npm install
npm run dev
```

Deschideți adresa afișată în terminal, de obicei `http://localhost:5173`.

## Modelul de Date
* **Nume:** Numele traseului (Text)
* **Stare:** Parcurs sau Planificat (Da/Nu)
* **Etichetă:** Dificultate - Ușor, Mediu, Dificil (Listă fixă)
* **Categorie:** Masivul montan (Grupare)

## Elemente de test (Carduri precompletate)
1. Creasta Pietrei Craiului - Piatra Craiului (Dificil) - Parcurs
2. Cabana Mălăiești - Bucegi (Ușor) - Planificat
3. Vârful Moldoveanu - Făgăraș (Mediu) - Planificat

## Stadiul Proiectului (Status)
- [x] Stage 1: Static mockup HTML & CSS
- [x] Stage 2: Data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: React components rendered from data
- [x] Stage 5: Local state and events
- [ ] Stage 6: Loading data from a mock API

## Tabel de verificare - Etapa 1

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/bogdanalexandru3/PeakPath/blob/f465531/README.md#L1-L19) | Read the README and confirm the description, data model, sample entries, and run instructions are present. |
| S1-R2 | AI usage section | [README.md](https://github.com/bogdanalexandru3/PeakPath/blob/f465531/README.md#L39-L40) | Read the AI usage section in the README. |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](https://github.com/bogdanalexandru3/PeakPath/blob/f465531/ai-log/etapa-01.md#L1-L14) | Open the AI log file and confirm it contains the Stage 1 AI usage notes. |
| S1-R4 | Header, form (text + select), 3 cards with own data | [index.html](https://github.com/bogdanalexandru3/PeakPath/blob/f465531/index.html#L9-L94) | Open the page and verify the title, form fields, and three travel cards are visible. |
| S1-R5 | Finished card looks different | [style.css](https://github.com/bogdanalexandru3/PeakPath/blob/f465531/style.css#L40-L70), [style.css](https://github.com/bogdanalexandru3/PeakPath/blob/f465531/style.css#L155-L170) | Inspect the completed card styles and confirm it is visually marked as completed. |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css](https://github.com/bogdanalexandru3/PeakPath/blob/f465531/style.css#L96-L104), [style.css](https://github.com/bogdanalexandru3/PeakPath/blob/f465531/style.css#L197-L202) | Resize below 700px and confirm the layout switches to one column. |
| S1-R7 | Visible focus, readable dark theme | [style.css](https://github.com/bogdanalexandru3/PeakPath/blob/f465531/style.css#L15-L25), [style.css](https://github.com/bogdanalexandru3/PeakPath/blob/f465531/style.css#L127-L147) | Navigate with Tab and check the focus ring, then inspect the dark mode colors. |
| S1-R8 | Commit “Stage 1” pushed link to the commit | [GitHub commit history](https://github.com/bogdanalexandru3/PeakPath/commits/main) | Confirm the latest pushed commit message is Stage 1 and matches the project history. |

## Stage 2: data logic
Plain JavaScript, no DOM. `mockup/trasee.js` holds the trail array and the functions that read and change it. Results are printed in the browser console (F12).

## Tabel de verificare - Etapa 2

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S2-R1 | JS file linked, logs on page load | [mockup/index.html script](https://github.com/bogdanalexandru3/PeakPath/blob/main/mockup/index.html#L93), [console output](https://github.com/bogdanalexandru3/PeakPath/blob/main/mockup/trasee.js#L74-L100) | Open the mockup page, press F12, and confirm console output appears on load. |
| S2-R2 | 3+ items with id, name, state, tag | [mockup/trasee.js data set](https://github.com/bogdanalexandru3/PeakPath/blob/main/mockup/trasee.js#L4-L8) | Read the array structure and confirm three trails have the required fields. |
| S2-R3 | list, count, search, add, toggle, delete | [mockup/trasee.js functions](https://github.com/bogdanalexandru3/PeakPath/blob/main/mockup/trasee.js#L13-L72) | Read the functions and check the console output from the demo flow. |
| S2-R4 | add rejects empty name and invalid tag | [mockup/trasee.js validation](https://github.com/bogdanalexandru3/PeakPath/blob/main/mockup/trasee.js#L35-L48), [validation calls](https://github.com/bogdanalexandru3/PeakPath/blob/main/mockup/trasee.js#L95-L96) | Verify the last two console lines show rejected input for empty title and invalid difficulty. |
| S2-R5 | original array unchanged after add | [mockup/trasee.js immutability check](https://github.com/bogdanalexandru3/PeakPath/blob/main/mockup/trasee.js#L85) | Inspect the console output showing original length remains unchanged. |
| S2-R6 | README Stage 2 section + AI log | [README.md Stage 2 section](https://github.com/bogdanalexandru3/PeakPath/blob/main/README.md#stage-2-data-logic), [ai-log/etapa-02.md](https://github.com/bogdanalexandru3/PeakPath/blob/main/ai-log/etapa-02.md) | Read the Stage 2 section and AI log. |
| S2-R7 | commit “Stage 2” pushed link to the commit | [GitHub commit history](https://github.com/bogdanalexandru3/PeakPath/commits/main) | Confirm the latest pushed commit message is Stage 2 and matches the repository history. |

## Etapa 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## How to run
```sh
cd frontend
npm install
npm run dev
```
Then open the address printed in the terminal (usually `http://localhost:5173`).

## AI usage
## Tabel de verificare - Etapa 3

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S3-R1 | npm run dev starts without errors | [frontend/package.json](https://github.com/bogdanalexandru3/PeakPath/blob/8bf76f8e4c5636de51e3e6c1370e6f9aff00a4cc/frontend/package.json) | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | [frontend/src/App.jsx](https://github.com/bogdanalexandru3/PeakPath/blob/8bf76f8e4c5636de51e3e6c1370e6f9aff00a4cc/frontend/src/App.jsx#L25-L35) | edit data, save |
| S3-R3 | data from README, not from the example | [frontend/src/App.jsx](https://github.com/bogdanalexandru3/PeakPath/blob/8bf76f8e4c5636de51e3e6c1370e6f9aff00a4cc/frontend/src/App.jsx#L1-L23) | compare with README |
| S3-R4 | stage 1 styles reused | [frontend/src/App.css](https://github.com/bogdanalexandru3/PeakPath/blob/8bf76f8e4c5636de51e3e6c1370e6f9aff00a4cc/frontend/src/App.css) | look at the page |
| S3-R5 | node_modules ignored, build passes | [frontend/.gitignore](https://github.com/bogdanalexandru3/PeakPath/blob/8bf76f8e4c5636de51e3e6c1370e6f9aff00a4cc/frontend/.gitignore) | npm run build |
| S3-R6 | README Stage 3 section + AI log | [README.md](https://github.com/bogdanalexandru3/PeakPath/blob/8bf76f8e4c5636de51e3e6c1370e6f9aff00a4cc/README.md), [ai-log/etapa-03.md](https://github.com/bogdanalexandru3/PeakPath/blob/8bf76f8e4c5636de51e3e6c1370e6f9aff00a4cc/ai-log/etapa-03.md) | read |
| S3-R7 | commit “Stage 3” pushed | [Stage 3 commit](https://github.com/bogdanalexandru3/PeakPath/commit/8bf76f8e4c5636de51e3e6c1370e6f9aff00a4cc) | confirm the Stage 3 commit is published |

## Lista de verificare - Etapa 3
- [x] S3-R1 `npm run dev` pornește fără erori.
- [x] S3-R2 Pagina afișează numele aplicației și contorul calculat din date.
- [x] S3-R3 Datele sunt cele din README, nu cele din exemplu.
- [x] S3-R4 Stilurile din Etapa 1 se regăsesc în aplicație.
- [x] S3-R5 `node_modules/` nu apare pe GitHub, iar `npm run build` rulează fără erori.
- [x] S3-R6 README-ul este actualizat, iar jurnalul AI este completat.
- [x] S3-R7 Commit-ul Stage 3 este publicat pe GitHub.

## AI usage
Acest proiect a utilizat asistență AI (Gemini). Log-urile conversațiilor se regăsesc în fișierul `ai-log/etapa-02.md`.
Pentru Etapa 3, jurnalul este în `ai-log/etapa-03.md`.

## Etapa 4: Componente construite din date
Lista traseelor este randată din array prin două componente React:
- `TraseeList` primește toate traseele prin props și generează lista.
- `TraseuCard` primește un singur traseu prin props și afișează datele și starea acestuia.

Jurnalul AI pentru Etapa 4 este în `ai-log/etapa-04.md`.

## Tabel de verificare - Etapa 4

| ID | Cerință | Unde | Cum se verifică |
| --- | --- | --- | --- |
| S4-R1 | Cel puțin două componente, fiecare în fișier propriu | `frontend/src/components/` | Deschideți folderul și verificați cele două fișiere JSX. |
| S4-R2 | Cardul primește datele prin props | `frontend/src/components/TraseuCard.jsx` | Verificați prop-ul `traseu`; componenta nu accesează array-ul. |
| S4-R3 | Lista folosește `map` și `key={traseu.id}` | `frontend/src/components/TraseeList.jsx` | Deschideți aplicația și verificați consola browserului. |
| S4-R4 | Lista goală afișează un mesaj | `frontend/src/components/TraseeList.jsx` | Înlocuiți temporar array-ul cu `[]`. |
| S4-R5 | Starea traseului schimbă aspectul cardului | `frontend/src/components/TraseuCard.jsx` | Modificați temporar `parcurs` pentru un traseu. |
| S4-R6 | README și jurnal AI actualizate | `README.md`, `ai-log/etapa-04.md` | Citiți secțiunea și jurnalul Etapei 4. |
| S4-R7 | Commit-ul Stage 4 este publicat pe GitHub | Istoricul GitHub | Verificați commit-ul „Stage 4: components rendered from data”. |

## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page, and the counters in the header follow automatically. A button in the header switches between light and dark mode. Changes are lost on refresh, which is what stage 6 and stage 10 fix.

Jurnalul AI pentru Etapa 5 este în `ai-log/etapa-05.md`.

## Tabel de verificare - Etapa 5

| ID | Cerință | Unde | Cum se verifică |
| --- | --- | --- | --- |
| S5-R1 | List kept in `useState`, in `App` | [App.jsx](https://github.com/bogdanalexandru3/PeakPath/blob/main/frontend/src/App.jsx#L35-L36) | Read the list state initialization. |
| S5-R2 | Toggling changes state and card appearance | [App.jsx](https://github.com/bogdanalexandru3/PeakPath/blob/main/frontend/src/App.jsx#L39-L47), [TraseuCard.jsx](https://github.com/bogdanalexandru3/PeakPath/blob/main/frontend/src/components/TraseuCard.jsx#L14-L19) | Click a checkbox and check the card. |
| S5-R3 | Delete removes the item | [App.jsx](https://github.com/bogdanalexandru3/PeakPath/blob/main/frontend/src/App.jsx#L49-L51), [TraseuCard.jsx](https://github.com/bogdanalexandru3/PeakPath/blob/main/frontend/src/components/TraseuCard.jsx#L27-L31) | Click Delete. |
| S5-R4 | Header counter is derived, not stored in state | [App.jsx](https://github.com/bogdanalexandru3/PeakPath/blob/main/frontend/src/App.jsx#L37) | Toggle or delete an item and watch the header. |
| S5-R5 | State updates are immutable | [App.jsx](https://github.com/bogdanalexandru3/PeakPath/blob/main/frontend/src/App.jsx#L39-L51) | Read the update functions. |
| S5-R6 | Light/dark toggle sets state and `data-theme` on `<html>` | [App.jsx](https://github.com/bogdanalexandru3/PeakPath/blob/main/frontend/src/App.jsx#L28-L33), [App.jsx](https://github.com/bogdanalexandru3/PeakPath/blob/main/frontend/src/App.jsx#L53-L68), [App.css](https://github.com/bogdanalexandru3/PeakPath/blob/main/frontend/src/App.css#L15-L41) | Click the theme button with both system themes. |
| S5-R7 | No console warnings; README and AI log updated | [README.md Stage 5](https://github.com/bogdanalexandru3/PeakPath/blob/main/README.md#stage-5-local-state-and-events), [ai-log/etapa-05.md](https://github.com/bogdanalexandru3/PeakPath/blob/main/ai-log/etapa-05.md) | Open DevTools Console and read the documentation. |
| S5-R8 | Stage 5 commit pushed | [GitHub commit history](https://github.com/bogdanalexandru3/PeakPath/commits/main) | Confirm the Stage 5 commit is published. |