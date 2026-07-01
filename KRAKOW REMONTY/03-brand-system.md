# System wizualny

## Idea

**Porządek wpisany w remont.**

Warstwa robocza i efekt końcowy współistnieją w jednym systemie: surowy tynk, linie pomiarowe i oznaczenia techniczne łączą się z czystą typografią, spokojnymi zdjęciami i dopracowanymi detalami.

## Pozycjonowanie

Lokalny wykonawca dla klientów, którzy chcą przeprowadzić remont mieszkania przez uporządkowane etapy i z jednym punktem kontaktu.

## Osobowość

- konkretna,
- odpowiedzialna,
- techniczna,
- spokojna,
- bezpośrednia,
- bez marketingowej przesady.

## Paleta

- Graphite Work: `#222522` — dominujący ciemny kolor,
- Mineral White: `#F4F1EA` — główne jasne tło,
- Plaster Warm: `#D8CFC1` — warstwy i panele,
- Builder Red: `#C84E3B` — ostry akcent, maks. 8–10% powierzchni,
- Steel Grey: `#6D746F` — tekst drugorzędny,
- Concrete Light: `#E7E3DC` — podziały,
- Site Green: `#627A64` — komunikaty poprawne.

## Typografia

Nie używać Inter, Roboto, Arial ani systemowych fontów jako głównego systemu.

- Nagłówki: **Bricolage Grotesque**, 600–700.
- Tekst: **Source Sans 3**, 400–600.
- Etykiety i numery: **IBM Plex Mono**, 500.

Fonty ładować lokalnie jako WOFF2 lub przez Google Fonts tylko na etapie demo.

## Skala

- Hero: `clamp(3.5rem, 7vw, 7.5rem)`
- H1 podstrony: `clamp(2.8rem, 5.2vw, 5.5rem)`
- H2: `clamp(2rem, 3.8vw, 4rem)`
- H3: `clamp(1.3rem, 2vw, 1.8rem)`
- Lead: `clamp(1.1rem, 1.7vw, 1.45rem)`
- Body: `1rem–1.1rem`
- Mono label: `0.72rem–0.82rem`, uppercase.

## Siatka

- maksymalny layout: 1440 px,
- kontener treści: 1240 px,
- desktop: 12 kolumn,
- tablet: 8,
- mobile: 4,
- obrazy mogą kontrolowanie wychodzić poza kontener,
- rytm nie może być jednakowy w każdej sekcji.

## Odstępy

Bazowa jednostka 8 px. Duże sekcje: 96–160 px na desktopie, 64–96 px na mobile.

## Kształty

- radius 4, 8 albo 12 px,
- brak miękkich kart 24–32 px,
- linie 1 px i oznaczenia przypominające wymiarowanie,
- wybrane elementy mogą mieć ścięty narożnik lub techniczną zakładkę.

## Przyciski

Primary:

- ciemny prostokąt,
- wyraźny kontrast,
- wysokość min. 54 px,
- animowana strzałka,
- hover przechodzi w Builder Red.

Secondary:

- bez kapsuły,
- cienka linia lub podkreślenie,
- wyraźny focus.

## Tła

Nie ograniczać się do jednolitych prostokątów. Stosować:

- subtelną mineralną teksturę,
- techniczną siatkę o bardzo niskim kontraście,
- liniowe oznaczenia,
- warstwy o różnych głębokościach,
- delikatne radialne światło,
- przejścia między powierzchnią surową a wykończoną.

## Fotografia

- realne polskie mieszkania,
- naturalne światło,
- detale wykonawcze,
- normalna skala, nie luksusowa willa,
- mieszanka pełnych wnętrz, etapów i detali,
- brak pozowanych pracowników.

## Motion

- CSS-first,
- clip-path i mask reveal,
- rysowanie linii procesu,
- spokojne przesunięcia 8–24 px,
- zdjęcia skalowane 1.04 → 1,
- lekki parallax maks. 3–4%,
- rytm 500–750 ms,
- respektowanie `prefers-reduced-motion`.

## Mobile

- proces zmienia się na pionowy,
- CTA telefoniczne jest łatwo dostępne,
- brak interakcji zależnych wyłącznie od hover,
- poster zamiast ciężkiego wideo,
- zdjęcia kadrowane osobno na mobile.
