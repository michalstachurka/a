# KrakowRemonty.com — demonstracyjna koncepcja strony

> **Nieoficjalna koncepcja demonstracyjna — projekt nie jest oficjalną stroną firmy.**
> Formularz nie wysyła i nie zapisuje danych. Każda podstrona zawiera
> `<meta name="robots" content="noindex, nofollow, noarchive">`.

Kierunek kreatywny: **„Remont bez chaosu”** — technicznie, spokojnie, lokalnie.
Pełna specyfikacja projektu znajduje się w folderze `KRAKOW REMONTY/` (pliki `01`–`09` + `CLAUDE.md`).

## Uruchomienie

Strona to czysty HTML/CSS/JS bez procesu build. Wystarczy dowolny statyczny serwer:

```bash
python3 -m http.server 8090
# albo: npx serve .
```

i otwarcie `http://localhost:8090/`.

## Struktura plików

```
/
├── index.html            strona główna (hero, pasek konkretów, mapa remontu,
│                         mozaika usług, obawy/sposób pracy, teaser realizacji, kontakt)
├── oferta.html           zakres prac + sticky subnav + sekcje kategorii
├── realizacje.html       galeria z filtrami i lightboxem + rail detali
├── proces.html           pionowa mapa 6 etapów + podział ról + checklista
├── kontakt.html          dane kontaktowe + formularz demonstracyjny
├── css/
│   ├── tokens.css        design tokens (paleta, typografia, odstępy, motion)
│   ├── base.css          fonty (@font-face), reset, typografia, dostępność
│   ├── layout.css        kontener, header, menu mobilne, stopka
│   ├── components.css    pasek konkretów, mapa remontu, mozaika, galeria,
│   │                     lightbox, rail detali, formularze
│   ├── pages.css         hero, nagłówki podstron, sekcje stron
│   └── responsive.css    breakpointy 640 / 960 / 1280
├── js/
│   ├── main.js           menu mobilne (focus trap), reveal (IntersectionObserver),
│   │                     scrollspy oferty, linia procesu
│   ├── process-map.js    interaktywna mapa remontu (tabs + klawiatura, accordion mobile)
│   ├── gallery.js        filtry kategorii + dostępny lightbox (focus trap, Escape, strzałki)
│   └── demo-form.js      walidacja lokalna, komunikat demo, zero wysyłki/zapisu
├── assets/
│   ├── fonts/            lokalne WOFF2: Bricolage Grotesque (variable),
│   │                     Source Sans 3 (variable), IBM Plex Mono 500 — latin + latin-ext
│   ├── images/           31 placeholderów SVG (patrz „Materiały do podmiany”)
│   ├── icons/            favicon.svg (neutralny znak — nie jest logo firmy)
│   └── video/            puste — patrz sekcja wideo poniżej
└── KRAKOW REMONTY/       źródłowa specyfikacja projektu (01–09 + CLAUDE.md)
```

## Wykonane testy

Testy automatyczne (Playwright + Chromium, skrypt przewija strony i sprawdza):

- **5 podstron**: HTTP 200, zero błędów i ostrzeżeń konsoli, zero błędów JS,
  zero nieudanych żądań, brak martwych linków, `noindex` obecny wszędzie;
- **6 szerokości**: 360×800, 390×844, 768×1024, 1024×768, 1440×900, 1920×1080 —
  brak poziomego overflow na każdej podstronie;
- **interakcje**: mapa remontu (klik, strzałki, Home/End, `aria-selected`),
  accordion mobilny (jeden etap naraz, `aria-expanded`), menu mobilne
  (otwarcie, focus trap, Escape, przeniesienie i zwrot fokusu), filtry galerii,
  lightbox (focus trap, Escape, strzałki, licznik), formularz
  (walidacja pól wymaganych, komunikat demo, **brak nawigacji/wysyłki po submit**),
  scrollspy subnav oferty;
- przegląd wizualny zrzutów ekranu wszystkich podstron na 6 szerokościach.

## Krytyka pierwszej wersji i poprawki

Wskazane słabości (minimum 5) i status:

1. **Placeholdery za blade** — mozaika, teaser i kadry oferty wyglądały jak puste
   kafle → **poprawione**: regeneracja SVG z mocniejszymi tonami, wyraźniejszymi
   liniami i akcentami.
2. **Hero-kadr bez punktu ciężkości** → **poprawione**: mocniejszy podział
   surowe/wykończone, grubsza linia lasera, wypełnione płaszczyzny.
3. **H1 hero za duży na 1920 px (tekst ucięty) + nakładanie kolumn siatki** →
   **poprawione**: korekta skali (`clamp` z niższym sufitem) i jawne przypisanie
   kolumn (treść / wskaźnik etapów / kadr).
4. **CTA hero łamało się na dwie linie** → **poprawione** (`white-space: nowrap`).
5. **Pasek konkretów zbyt drobny** → **poprawione** (większa typografia i odstępy).
6. **Słaba czytelność tekstu na jasnych kaflach mozaiki** → **poprawione**
   (mocniejszy gradient pod tekstem).
7. Motyw „mieszkania” zbyt pusty na kaflach → **poprawione** (wypełnione
   płaszczyzny podłogi i ścian w perspektywie).

Po poprawkach cały zestaw testów przeszedł ponownie.

## Materiały do podmiany przed publikacją

Wszystkie grafiki to **lokalne placeholdery SVG** w estetyce dokumentacji
wykonawczej. Prompty do wygenerowania finalnych zdjęć: `KRAKOW REMONTY/06-image-prompts.md`;
prompty wideo: `KRAKOW REMONTY/07-video-prompts.md`.

### Kadry główne (prompty 1–8 z pliku 06)

| Placeholder (SVG) | Docelowy plik (WebP) | Format |
|---|---|---|
| `assets/images/hero-remont-bez-chaosu-16x9.svg` | `hero-remont-bez-chaosu-16x9.webp` | 16:9, min. 1920×1080 |
| `assets/images/oferta-deweloperskie-4x5.svg` | `oferta-deweloperskie-4x5.webp` | 4:5 |
| `assets/images/oferta-lazienka-detal-4x5.svg` | `oferta-lazienka-detal-4x5.webp` | 4:5 |
| `assets/images/oferta-sciany-sufity-3x2.svg` | `oferta-sciany-sufity-3x2.webp` | 3:2 |
| `assets/images/oferta-podloga-3x2.svg` | `oferta-podloga-3x2.webp` | 3:2 |
| `assets/images/proces-pomiar-plan-16x9.svg` | `proces-pomiar-plan-16x9.webp` | 16:9 |
| `assets/images/realizacje-mieszkanie-16x9.svg` | `realizacje-mieszkanie-16x9.webp` | 16:9 |
| `assets/images/kontakt-detal-4x5.svg` | `kontakt-detal-4x5.webp` | 4:5 |

### Mapa remontu (6 kadrów etapów, 16:10)

`pm-01-rozmowa.svg` … `pm-06-odbior.svg` — docelowo spójna seria zdjęć etapów
(rozmowa/plan, pomiar, ustalanie zakresu, zabezpieczenie, wykonanie, odbiór).

### Galeria realizacji (12 kadrów — wyłącznie zdjęcia zaakceptowane przez firmę)

`g-lazienka-01…03`, `g-zabudowa-01…02`, `g-sufit-01`, `g-podloga-01…02`,
`g-sciana-01`, `g-mieszkanie-01…03` — proporcje wg nazw plików (4:5, 1:1, 3:2, 16:9).
Opisy „Zakres: …” na kartach są przykładowe — do zastąpienia rzeczywistym
zakresem każdej realizacji.

### Rail detali (5 kadrów, 4:5)

`d-narozniki.svg`, `d-laczenia.svg`, `d-fugi.svg`, `d-podlogi.svg`, `d-zabudowy.svg`.

### Wideo hero (opcjonalne)

Obecnie hero używa statycznego kadru. Po wygenerowaniu wideo wg
`07-video-prompts.md` (WebM+MP4, ≤6 MB, bez audio) należy podmienić `<figure class="hero__frame">`
w `index.html` na `<video autoplay muted loop playsinline preload="metadata" poster="…">`
z posterem WebP; na mobile i przy `prefers-reduced-motion` zostaje poster.

### Pozostałe

- **Logo/favicon** — `assets/icons/favicon.svg` to neutralny znak zastępczy,
  nie kopia obecnego logo firmy.
- **Dane wymagające potwierdzenia przed publikacją** (za `01-research.md`):
  zakres usług, obszar działania, bezpłatny pomiar, wybór nazwy głównej,
  zgoda na zdjęcia, aktualność telefonu/e-maila/adresu, sposób realizowania instalacji.
