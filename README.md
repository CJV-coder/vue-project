# Campus Corner — Web Basics experiment

A Vue 3 single-page application built with Vite and Vue Router. The application
contains one fully designed static page, **Campus Corner**, a fictional campus café
on Library Square.

No backend, database, login or payment flow is involved: the page is a static
display page, and every practical detail on it (address, opening hours, prices,
contact details) is clearly labelled as sample information.

## Page structure

`/campus-corner` contains, in order:

1. Hero — full-width café photograph, café name, welcome line, three quick facts
2. Welcome note from the owners
3. The space — the front room, the back room, the terrace, and a house rule
4. Three recommended drinks with prices
5. Photo gallery — counter, window seat, pastries
6. Opening hours
7. Location, walking directions and contact details
8. Footer stating that the content is illustrative and the photographs are AI-generated

## Project setup

```sh
npm install
npm run dev      # development server, prints the local URL
npm run build    # production build into dist/
```

Open the local URL that `npm run dev` prints (for example
`http://localhost:5174/campus-corner`). A plain static file server such as VS Code
Live Server cannot run this project, because the browser cannot execute `.vue`
single-file components without Vite's compiler.

## Structure

```
src/
  main.js                 createApp(App).use(router).mount('#app')
  App.vue                 default page chrome vs. bare full-bleed layout
  assets/main.css         global reset and body.bare-layout rules
  router/index.js         routes, page titles, catch-all redirect
  views/
    HomeView.vue
    CampusCornerView.vue  the café page (content, styles, scoped CSS)
    AboutView.vue
public/images/            interior, counter, window-seat, pastries
```

## Notes

- Headings use Fraunces, body text uses Karla, both loaded from Google Fonts in
  `index.html`.
- The café page sets `meta.bare` on its route; `App.vue` then skips the default
  header and `main.css` releases the width limit the starter template puts on
  `#app`, so the hero photograph can run edge to edge.
- The photographs were generated for this exercise and are stored in
  `public/images/`. Prompt records are in `PROMPTS.md`.
