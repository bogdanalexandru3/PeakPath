# PeakPath - Etapa 1

PeakPath este o aplicație web care funcționează ca un jurnal de drumeții, permițând utilizatorilor să își țină evidența traseelor montane.

## Modul de rulare
Proiectul conține exclusiv fișiere statice (HTML și CSS). Pentru a rula aplicația, deschideți fișierul `index.html` în orice browser modern sau utilizați extensia Live Server din Visual Studio Code.

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
- [ ] Stage 3: Vite and React project

## Etapa 2: Data logic
Am extras datele din HTML și le-am integrat într-un array de obiecte în fișierul `trasee.js`. Toate funcțiile de manipulare (adăugare, listare, comutare) sunt implementate respectând imutabilitatea, evitând modificarea la nivelul DOM-ului. Ieșirea este printată exclusiv în consolă.

## AI usage
Acest proiect a utilizat asistență AI (Gemini). Log-urile conversațiilor se regăsesc în fișierul `ai-log/etapa-01.md`.