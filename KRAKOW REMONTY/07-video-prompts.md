# Prompty wideo do Gemini

## Decyzja

Rekomendowane jest krótkie hero wideo, ale wyłącznie jako spokojna sekwencja prawdziwych etapów. Gdy wynik będzie sztuczny, użyć statycznego hero z `06-image-prompts.md`.

## Prompt główny

Generate a single 8-second photorealistic cinematic hero video for the website of a local apartment renovation company in Kraków, Poland. The core idea is “renovation without chaos”: organized stages, precise work and a calm finished result.

Show one realistic mid-sized urban apartment, not a luxury villa. Begin in a controlled finishing-stage environment: protected floor, one wall being prepared, neatly arranged tools and materials, a subtle laser-level line. Use one very slow stable dolly movement forward and slightly right. Through two natural editorial cuts, never magical morphing, show the same visual axis progressing toward a clean finished wall, installed light-oak floor and one completed built-in detail. End on a calm composition visually close enough to the opening frame for a seamless loop.

Keep the left 42% visually quiet and slightly darker for HTML headline and CTA. Put the main detail on the right. Eye-level, natural 35 mm lens, straight verticals, realistic Polish apartment proportions.

Soft overcast daylight, restrained warm practical light. Mineral white, warm plaster beige, light oak, graphite and one subtle brick-red construction marking accent. Slow, precise, cinematic motion. No handheld shake, no fast zoom, no dramatic reveal, no staged workers crossing the frame.

High-end architectural documentary realism, detailed wall texture, believable floor installation, natural reflections, no glossy CGI.

Hard negatives: no text, logos, watermarks, brand names, futuristic interfaces, floating tools, impossible transformations, time-lapse chaos, dust explosions, sparks, staged helmets, distorted hands, bending walls, duplicate objects, surreal geometry or generic abstract figures.

Output: 16:9, 8 seconds, silent, 24 fps cinematic look, suitable as a looping website background.

## Prompt alternatywny

Generate a 7-second photorealistic website hero video focused on renovation precision. Show three tightly connected details in the same Kraków apartment: a laser line crossing a freshly prepared wall, a clean tile edge and grout junction, and a light-oak floor row being precisely aligned. Use consistent lighting and color so the sequence feels like one campaign.

Slow lateral macro-to-medium camera motion, stable gimbal, 50–65 mm lens character. Use elegant match cuts based on straight lines and material edges. The last shot should visually align with the first laser line for a smooth loop. Preserve quiet negative space on the left whenever framing becomes wider.

Soft daylight, mineral whites, plaster beige, graphite and restrained brick-red. No luxury showroom. No text, logo, watermark, brands, distorted tools or hands, impossible tile patterns, magic morphing, sparks, fast moves, futuristic graphics or abstract figures. 16:9, 7 seconds, silent.

## Wdrożenie

- WebM VP9/AV1 + MP4 H.264 fallback,
- 1920 × 1080,
- cel: 2–4 MB, maksimum 6 MB,
- bez audio,
- `autoplay muted loop playsinline`,
- poster WebP,
- mobile i reduced-motion: poster zamiast autoplay,
- desktop `object-position: 62% 50%`,
- tablet `68% 50%`.

## Overlay

```css
background:
  linear-gradient(90deg, rgba(22,24,22,.80) 0%, rgba(22,24,22,.54) 35%, rgba(22,24,22,.08) 72%, transparent 100%),
  linear-gradient(180deg, rgba(22,24,22,.08), rgba(22,24,22,.18));
```
