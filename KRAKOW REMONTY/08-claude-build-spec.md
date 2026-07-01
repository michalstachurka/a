# Specyfikacja wdrożenia dla Claude Code

## Rola

Claude Code ma działać jako senior frontend developer i design engineer. Wszystkie pliki Markdown w folderze stanowią jedną specyfikację. `CLAUDE.md` określa nadrzędny standard estetyczny.

Nie wymyślaj nowego kierunku i nie upraszczaj projektu do typowego szablonu. W razie konfliktu:

1. fakty z `01-research.md`,
2. zasady bezpieczeństwa i niewymyślania danych,
3. `CLAUDE.md`,
4. wybrany kierunek z `02-creative-directions.md`,
5. system i architektura,
6. pozostałe wskazówki.

## Technologie

- semantic HTML5,
- nowoczesny CSS,
- vanilla JavaScript,
- bez React/Vue i bez frameworka CSS,
- brak procesu build, chyba że absolutnie konieczny,
- strona ma działać po uruchomieniu prostego serwera lokalnego.

## Pliki wynikowe

```text
/
├── index.html
├── oferta.html
├── realizacje.html
├── proces.html
├── kontakt.html
├── assets/
│   ├── images/
│   ├── video/
│   ├── icons/
│   └── fonts/
├── css/
│   ├── tokens.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   ├── pages.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── process-map.js
│   ├── gallery.js
│   └── demo-form.js
└── README.md
```

## Krytyczne reguły designu

- Nie używaj Inter, Roboto, Arial ani system font jako głównych fontów.
- Użyj Bricolage Grotesque, Source Sans 3 i IBM Plex Mono zgodnie z systemem.
- Nie buduj każdej sekcji jako wycentrowanego nagłówka i siatki kart.
- Co najmniej trzy sekcje muszą mieć własną, charakterystyczną mechanikę kompozycyjną.
- Tła mają zawierać subtelną atmosferę: mineralną teksturę, siatkę, światło, linie i warstwy.
- Akcent czerwony ma być zdecydowany, ale ograniczony.
- CSS variables są obowiązkowe.
- Motion ma wzmacniać narrację, a nie być dekoracją.
- Unikaj wyglądu dashboardu, SaaS, agencji AI i gotowego motywu WordPress.

## CSS tokens

```css
:root {
  --c-graphite: #222522;
  --c-mineral: #F4F1EA;
  --c-plaster: #D8CFC1;
  --c-red: #C84E3B;
  --c-steel: #6D746F;
  --c-concrete: #E7E3DC;
  --c-success: #627A64;

  --font-display: "Bricolage Grotesque", sans-serif;
  --font-body: "Source Sans 3", sans-serif;
  --font-mono: "IBM Plex Mono", monospace;

  --container: 77.5rem;
  --radius-sm: .25rem;
  --radius-md: .5rem;
  --radius-lg: .75rem;
  --ease-out: cubic-bezier(.22, 1, .36, 1);
}
```

## Kluczowe komponenty

- `site-header`
- `mobile-menu`
- `hero-process`
- `facts-rail`
- `process-map`
- `service-mosaic`
- `concern-solution-sequence`
- `project-gallery`
- `detail-rail`
- `contact-panel`
- `demo-form`
- `demo-disclaimer`
- `site-footer`

## Mapa remontu

- desktop: pozioma oś sześciu etapów,
- aktywacja etapów przez kliknięcie i klawiaturę,
- opis i obraz zmieniają się bez przeładowania,
- linia postępu animuje się przy scrollu,
- mobile: pionowy accordion,
- stan aktywny widoczny także bez koloru.

## Mozaika usług

- różne proporcje elementów,
- minimum jeden moduł typograficzny bez obrazu,
- minimum jeden szeroki kadr,
- minimum jeden pionowy detal,
- brak sześciu identycznych kart,
- hover nie może być wymagany do odczytania informacji.

## Obawy i sposób pracy

- dwie nierówne kolumny,
- połączone liniami lub numerami,
- aktywacja par podczas scrollowania,
- na mobile układ sekwencyjny,
- nie używać tabeli HTML wyglądającej jak arkusz.

## Galeria

- filtry kategorii,
- nieregularna siatka,
- lazy loading,
- prosty dostępny lightbox,
- focus trap i Escape,
- brak wymyślonych opisów liczbowych.

## Hero

Jeżeli istnieje dobre wideo:

```html
<video autoplay muted loop playsinline preload="metadata" poster="assets/images/hero-remont-bez-chaosu-16x9.webp">
  <source src="assets/video/hero.webm" type="video/webm">
  <source src="assets/video/hero.mp4" type="video/mp4">
</video>
```

Jeżeli brak dobrego wideo, użyj mocnego statycznego hero. Nie zostawiaj pustego video ani atrapy.

## Motion

- CSS-first,
- IntersectionObserver tylko do uruchamiania klas,
- animuj transform, opacity, clip-path i mask,
- żadnego bounce, glow i losowego parallaxu,
- wszystkie treści dostępne bez JS,
- `prefers-reduced-motion` wyłącza ruch bez utraty funkcji.

## Responsywność

Mobile-first. Sprawdź co najmniej:

- 360 × 800,
- 390 × 844,
- 768 × 1024,
- 1024 × 768,
- 1440 × 900,
- 1920 × 1080.

Breakpoints dopasuj do treści, nie mechanicznie. Orientacyjnie: 640, 960 i 1280 px.

## Formularz

- demonstracyjny,
- nie wysyła danych,
- waliduje pola lokalnie,
- po submit wyświetla jasny komunikat,
- nie zapisuje danych,
- pokazuje telefon i e-mail.

## SEO i oznaczenia

Na każdej podstronie:

```html
<meta name="robots" content="noindex, nofollow, noarchive">
```

W stopce:

> Nieoficjalna koncepcja demonstracyjna — projekt nie jest oficjalną stroną firmy.

## Dostępność

- poprawna hierarchia nagłówków,
- skip link,
- widoczny focus,
- kontrast AA,
- `aria-expanded`,
- obsługa klawiatury,
- alt-y,
- focus trap w menu i lightboxie,
- brak tekstu osadzonego wyłącznie w obrazach.

## Wydajność

- AVIF/WebP,
- width i height obrazów,
- lazy loading poza pierwszym ekranem,
- lokalne WOFF2,
- wideo maks. 6 MB,
- brak ciężkich bibliotek,
- minimalizacja CLS,
- skrypty z `defer`.

## Samodzielna kontrola jakości

Po pierwszej działającej wersji Claude Code ma:

1. uruchomić lokalny serwer,
2. sprawdzić wszystkie podstrony,
3. przetestować szerokości,
4. sprawdzić konsolę,
5. ocenić stronę pod kątem „AI slop”,
6. wskazać minimum pięć najsłabszych elementów,
7. poprawić minimum trzy najważniejsze,
8. ponownie przetestować.

## Kryteria ukończenia

- pięć działających podstron,
- spójna nawigacja,
- gotowe treści z pliku,
- trzy charakterystyczne sekcje,
- poprawny mobile,
- brak błędów konsoli,
- brak niedziałających linków,
- formularz nie wysyła danych,
- noindex,
- README z uruchomieniem i listą materiałów do wymiany,
- strona nie wygląda jak gotowy szablon ani typowy output AI.
