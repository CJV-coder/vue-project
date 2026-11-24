# Prompt record

The prompts used while building this project, in order. Earlier prompts relate to
the scaffold and to a first page that was later discarded; the final page was built
from the brief in Prompt 4.

## Prompt 1 — scaffold

> create vue3 project in SPA with "router"

Added `vue-router@4`, a router with history mode, `HomeView` / `AboutView`, and
`<RouterLink>` navigation in `App.vue`.

## Prompt 2 — first page (later removed)

> I would like a page introducing a travel destination called 'Porto Sereno', a small
> coastal town on the Mediterranean. It is mainly for young independent travellers and
> couples planning a relaxed weekend trip who want somewhere quiet, scenic and not
> overrun by tourists. The page should include the town name and a short welcoming
> introduction, a brief description of what makes the town special, three recommended
> places to visit (with a one-line description of each), a few photos of the harbour, old
> town streets and the nearby beach, the best time of year to visit, how to get there, and
> a short note on local food worth trying. Use a fresh, calm, seaside style with soft blue,
> white and sand colours. Make the town name and the main harbour photo stand out, keep
> the text easy to read, and leave enough space between sections. The page should look
> comfortable on both a computer and a phone.

Built as `PortoSeveroView.vue` with four generated photographs. Kept only as a
reference for the full-bleed layout; the component and its images were deleted in
Prompt 4.

## Prompt 3 — blank page report

> There's nothing in here

The page had been opened through VS Code Live Server (`127.0.0.1:5500`), which
serves `.vue` files as-is. Restarted the Vite dev server and confirmed the page
rendered.

## Prompt 4 — the café page (final)

> can you maybe change everthing fro the beginning, i want to make it campus cafe
>
> would like a page introducing a campus café called 'Campus Corner'. It is mainly for
> students who want a quiet place to read, chat and take a break between classes. The
> page should include the café name and a short welcome message, an introduction to the
> space, three recommended drinks with prices, a few photos, opening hours, the location
> and contact information. Use a warm and relaxed style, with cream and coffee-brown
> colours. Make the café name and main photo stand out, keep the text easy to read, and
> leave enough space between sections. The page should look comfortable on both a
> computer and a phone. Only one static display page is needed. There is no need for
> ordering, payment, registration or login. Use clearly identified sample information
> where details have not been provided.

Rebuilt the project around a single page at `/campus-corner`; removed the travel page
and its photographs.

## Prompt 5 — report

> I laready make the report, but just add the old reprot with the new things maybe lika
> photo ora something lika that, refernece it into other chat, you know right "Request
> report for Vue 3 SPA code"?

Updated the existing experiment report: kept the cover and section structure, rewrote
the objectives, code, results and discussion to match this build, and added the
desktop and mobile screenshots.

## Follow-up corrections requested during the build

- Hero did not reach the screen edges → added `meta.bare` plus `body.bare-layout`.
- Generated photographs carried a small watermark → cropped the bottom strip.
- Photo grid bottoms did not align → fixed grid row heights instead of per-image
  aspect ratios.
- Card heights shifted because the tag pill pushed titles down → moved the tag into a
  fixed bottom row.
- Mobile contact details crowded → stacked them below 900 px.
- Old URL left a dead address → catch-all route redirecting to the index.
