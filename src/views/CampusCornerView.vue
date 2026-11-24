<script setup>
import { onMounted, onUnmounted } from 'vue'

// Full-bleed page: opt out of the scaffold's centered #app column.
onMounted(() => document.body.classList.add('bare-layout'))
onUnmounted(() => document.body.classList.remove('bare-layout'))

const features = [
  {
    n: '01',
    title: 'The front room',
    text: 'Long oak tables, a low hum of conversation, and space to push two tables together for a group of six.',
  },
  {
    n: '02',
    title: 'The back room',
    text: 'Window seats, reading lamps and no phone calls. Ask anyone who studies here — it is the quietest seat on campus.',
  },
  {
    n: '03',
    title: 'The terrace',
    text: 'Four small tables under the green awning, first come first served, and the best light in the building until noon.',
  },
]

const drinks = [
  {
    name: 'House Filter',
    price: '£2.40',
    text: 'A rotating single origin, brewed by the jug. Free refills before 10am, which is when most of the library arrives.',
    tag: 'Before noon',
  },
  {
    name: 'Honey Cardamom Latte',
    price: '£3.60',
    text: 'Double shot, steamed milk, honey from the campus allotment and a little cardamom. Sweet, but not too.',
    tag: 'House favourite',
  },
  {
    name: 'Maple Cold Brew',
    price: '£3.80',
    text: 'Steeped overnight, finished with maple and oat milk over ice. The drink that gets people through revision week.',
    tag: 'Best iced',
  },
]

const hours = [
  { day: 'Monday – Thursday', time: '7:30 – 21:00' },
  { day: 'Friday', time: '7:30 – 19:00' },
  { day: 'Saturday', time: '9:00 – 18:00' },
  { day: 'Sunday', time: '10:00 – 16:00' },
]
</script>

<template>
  <div class="page">
    <!-- ============ HERO ============ -->
    <header class="hero">
      <div
        class="hero-media"
        role="img"
        aria-label="Warm café interior with wooden tables, hanging lamps, bookshelves and a student reading by the window"
      ></div>
      <div class="hero-veil"></div>

      <nav class="topbar" aria-label="Page sections">
        <a class="mark" href="#top">Campus Corner</a>
        <div class="topbar-links">
          <a href="#space">The space</a>
          <a href="#drinks">Drinks</a>
          <a href="#hours">Hours</a>
          <a href="#visit">Visit</a>
        </div>
      </nav>

      <div class="hero-inner" id="top">
        <p class="eyebrow">Library Square · a campus café</p>
        <h1>Campus <em>Corner</em></h1>
        <p class="tagline">
          A quiet corner of campus for coffee, reading, and the hour between two
          classes.
        </p>
        <ul class="facts">
          <li>Open from 7:30</li>
          <li>Two minutes from the Main Library</li>
          <li>No time limits, ever</li>
        </ul>
      </div>

      <a class="scroll-cue" href="#welcome" aria-label="Scroll to the welcome">
        <span></span>
      </a>
    </header>

    <!-- ============ WELCOME ============ -->
    <section class="section welcome" id="welcome">
      <div class="wrap welcome-grid">
        <div class="welcome-head">
          <p class="eyebrow ink">Welcome</p>
          <h2 class="lead">
            Come in, put your bag down, and stay a while.
          </h2>
        </div>
        <div class="welcome-body">
          <p>
            Campus Corner is a small café on the corner of Library Square, run by
            two former students who never quite left. There is no queue app, no
            two-hour limit and no music loud enough to follow — just good coffee, a
            shelf of books people have left behind, and a table by the window that
            gets the morning sun.
          </p>
          <p>
            Come alone with a reading list, come with three friends and a group
            project, or come because the lecture was cancelled. All of it is fine
            here.
          </p>
          <p class="signature">— Maya &amp; Idris, behind the counter</p>
          <p class="aside">
            <strong>Good to know:</strong> you never need to book. If there is a free
            table, it is yours.
          </p>
        </div>
      </div>
    </section>

    <!-- ============ THE SPACE ============ -->
    <section class="section space" id="space">
      <div class="wrap space-grid">
        <div class="space-copy">
          <p class="eyebrow ink">The space</p>
          <h2>Two rooms, two moods.</h2>
          <p class="sub">
            The front room is for talking. The back room is for reading. Between
            them sits a terrace with four tables for the days the sun shows up.
          </p>
          <p class="sub">
            Everything is second-hand, mismatched and repairable — the chairs came
            from a closing lecture hall, the lamps from a house clearance, and the
            bookshelf from anyone who wanted to leave something behind.
          </p>

          <div class="note-card">
            <span class="note-label">House rule</span>
            <p>Take a book, leave a book. No stamp, no desk, no borrowing card.</p>
          </div>
        </div>

        <ol class="features">
          <li v-for="feature in features" :key="feature.n" class="feature">
            <span class="feature-num">{{ feature.n }}</span>
            <div>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.text }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- ============ DRINKS ============ -->
    <section class="section drinks" id="drinks">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="eyebrow ink">Three things to order</p>
            <h2>The short menu, done properly.</h2>
          </div>
          <p class="sub">
            We keep the list short so everything is made well. These three are what
            most people come back for.
          </p>
        </div>

        <div class="drink-grid">
          <article v-for="drink in drinks" :key="drink.name" class="drink">
            <span class="drink-tag">{{ drink.tag }}</span>
            <div class="drink-top">
              <h3>{{ drink.name }}</h3>
              <span class="drink-price">{{ drink.price }}</span>
            </div>
            <p>{{ drink.text }}</p>
          </article>
        </div>

        <p class="drink-note">
          Prices are sample prices. Oat, soy and lactose-free milk +40p · Cakes and
          cinnamon buns change daily · Card and cash both welcome.
        </p>
      </div>
    </section>

    <!-- ============ PHOTOS ============ -->
    <section class="photos-section" aria-label="Photographs of the café">
      <div class="wrap">
        <div class="gallery">
          <figure class="shot shot-wide">
            <img
              src="/images/counter.png"
              alt="A barista pouring milk into a flat white at the espresso bar"
              loading="lazy"
            />
            <figcaption>The bar, mid-morning</figcaption>
          </figure>
          <figure class="shot shot-tall">
            <img
              src="/images/window-seat.png"
              alt="A cushioned window seat with an open book, a flat white and a plant in afternoon light"
              loading="lazy"
            />
            <figcaption>The back room, nine o’clock</figcaption>
          </figure>
          <figure class="shot shot-low">
            <img
              src="/images/pastries.png"
              alt="Cinnamon buns and a slice of carrot cake beside a cappuccino on a wooden table"
              loading="lazy"
            />
            <figcaption>Whatever came out of the oven</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- ============ HOURS + VISIT ============ -->
    <section class="section visit" id="visit">
      <div class="wrap visit-grid">
        <div class="hours-block" id="hours">
          <p class="eyebrow ink">Opening hours</p>
          <h2>Open early, close late.</h2>

          <ul class="hours-list">
            <li v-for="row in hours" :key="row.day">
              <span class="hours-day">{{ row.day }}</span>
              <span class="hours-dots" aria-hidden="true"></span>
              <span class="hours-time">{{ row.time }}</span>
            </li>
          </ul>

          <p class="hours-note">
            Exam weeks: open until 23:00, Monday to Thursday. Holiday hours are
            shorter — check the door or our Instagram.
          </p>
        </div>

        <div class="find-block">
          <p class="eyebrow ink">Find us</p>
          <h2>14 Willow Walk,<br />Library Square.</h2>

          <ol class="directions">
            <li>
              <span>From the Main Library</span>
              Cross the square towards the bike racks — two minutes, green awning on
              your left.
            </li>
            <li>
              <span>From the Students’ Union</span>
              Five minutes on foot, on the way down to the station. You will smell
              the cinnamon before you see us.
            </li>
            <li>
              <span>By bike</span>
              Racks outside, and a pump behind the counter if you need one.
            </li>
          </ol>

          <div class="contact">
            <a href="mailto:hello@campuscorner.example">hello@campuscorner.example</a>
            <a href="tel:+442079460821">+44 20 7946 0821</a>
            <span>@campuscorner.cafe</span>
          </div>

          <p class="contact-note">
            No booking needed. Coming with six or more? Ring ahead and we will push
            the tables together.
          </p>
        </div>
      </div>
    </section>

    <!-- ============ FOOTER ============ -->
    <footer class="footer">
      <div class="wrap footer-inner">
        <div>
          <p class="footer-mark">Campus Corner</p>
          <p class="footer-line">Library Square · open from 7:30</p>
        </div>
        <p class="disclaimer">
          <strong>Sample page.</strong> Campus Corner is a fictional café made for
          this demonstration. The address, hours, prices and contact details are
          illustrative only. Photography is AI-generated.
        </p>
        <a class="back" href="/">← Back to the index</a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* ---------- tokens ---------- */
.page {
  --ink: #2e211a;
  --muted: #6f5748;
  --coffee: #3d2a20;
  --coffee-soft: #5c4133;
  --cream: #fdf8ee;
  --cream-deep: #f4e7d3;
  --cream-line: rgba(61, 42, 32, 0.14);
  --caramel: #b5794a;
  --gold: #d9a86c;

  --display: 'Fraunces', 'Iowan Old Style', Georgia, 'Times New Roman', serif;
  --body: 'Karla', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

  color: var(--ink);
  background: var(--cream);
  font-family: var(--body);
  font-size: 17px;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

.wrap {
  width: min(1100px, 100% - 3rem);
  margin-inline: auto;
}

/* ---------- type ---------- */
h1,
h2,
h3 {
  font-family: var(--display);
  font-weight: 500;
  letter-spacing: -0.015em;
  margin: 0;
}

h2 {
  font-size: clamp(1.95rem, 3.4vw, 2.8rem);
  line-height: 1.16;
}

h3 {
  font-size: 1.3rem;
  line-height: 1.3;
}

p {
  margin: 0;
}

.eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 600;
  color: rgba(255, 247, 236, 0.8);
  margin-bottom: 1.1rem;
}

.eyebrow.ink {
  color: var(--caramel);
}

.sub {
  color: var(--muted);
  font-size: 1rem;
  margin-top: 1rem;
}

.aside {
  margin-top: 1.5rem;
  padding-left: 1rem;
  border-left: 2px solid var(--gold);
  color: var(--muted);
  font-size: 0.94rem;
}

.aside strong {
  color: var(--ink);
  font-weight: 600;
}

/* ---------- hero ---------- */
.hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  isolation: isolate;
  color: #fff8ee;
}

.hero-media {
  position: absolute;
  inset: 0;
  background-image: url('/images/interior.png');
  background-size: cover;
  background-position: center 45%;
  z-index: -2;
}

.hero-veil {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(to top, rgba(35, 22, 15, 0.9) 0%, rgba(35, 22, 15, 0.45) 34%, rgba(35, 22, 15, 0.06) 66%),
    linear-gradient(100deg, rgba(35, 22, 15, 0.55) 0%, rgba(35, 22, 15, 0.16) 46%, rgba(35, 22, 15, 0) 74%),
    linear-gradient(to bottom, rgba(35, 22, 15, 0.4) 0%, rgba(35, 22, 15, 0) 24%);
}

.topbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.5rem clamp(1.5rem, 5vw, 4rem);
}

.mark {
  font-family: var(--display);
  font-size: 1.2rem;
  letter-spacing: 0.01em;
  color: #fff8ee;
  text-decoration: none;
  padding: 0;
  background: transparent;
}

.topbar-links {
  display: flex;
  gap: 1.8rem;
  font-size: 0.76rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.topbar-links a {
  color: rgba(255, 248, 238, 0.85);
  text-decoration: none;
  padding: 0 0 2px;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: color 0.25s ease, border-color 0.25s ease;
}

.topbar-links a:hover,
.topbar-links a:focus-visible {
  color: #fff;
  background: transparent;
  border-bottom-color: rgba(255, 248, 238, 0.6);
}

.hero-inner {
  padding: 0 clamp(1.5rem, 5vw, 4rem) clamp(3.5rem, 8vh, 6rem);
  max-width: 1100px;
  margin-inline: auto;
  width: 100%;
}

.hero h1 {
  font-size: clamp(3.2rem, 11.5vw, 8rem);
  line-height: 0.9;
  letter-spacing: -0.035em;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 44px rgba(24, 14, 9, 0.35);
}

.hero h1 em {
  font-style: italic;
  font-weight: 400;
  color: #f6dcb6;
}

.tagline {
  font-size: clamp(1.02rem, 1.6vw, 1.26rem);
  line-height: 1.55;
  max-width: 36ch;
  color: rgba(255, 248, 238, 0.95);
  text-shadow: 0 1px 24px rgba(24, 14, 9, 0.5);
}

.facts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 1.6rem;
  list-style: none;
  margin: 1.8rem 0 0;
  padding: 0;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  color: rgba(255, 248, 238, 0.82);
}

.facts li {
  position: relative;
  padding-left: 1.1rem;
}

.facts li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--gold);
}

.scroll-cue {
  position: absolute;
  right: clamp(1.5rem, 5vw, 4rem);
  bottom: clamp(3.5rem, 8vh, 6rem);
  width: 1px;
  height: 64px;
  background: rgba(255, 248, 238, 0.26);
  overflow: hidden;
}

.scroll-cue span {
  position: absolute;
  inset: 0;
  background: rgba(255, 248, 238, 0.9);
  animation: drift 2.4s ease-in-out infinite;
}

@keyframes drift {
  0% { transform: translateY(-100%); }
  60%, 100% { transform: translateY(100%); }
}

/* ---------- sections ---------- */
.section {
  padding: clamp(4.5rem, 9vw, 7rem) 0;
}

.section-head {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: 2rem 4rem;
  align-items: end;
  margin-bottom: clamp(2.4rem, 4vw, 3.4rem);
}

/* ---------- welcome ---------- */
.welcome {
  background: var(--cream);
}

.welcome-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: start;
}

.lead {
  font-size: clamp(1.7rem, 3.2vw, 2.6rem);
  line-height: 1.26;
  letter-spacing: -0.02em;
  max-width: 18ch;
}

.welcome-body p + p {
  margin-top: 1.1rem;
}

.welcome-body > p {
  color: #4a372c;
}

.signature {
  font-family: var(--display);
  font-style: italic;
  font-size: 1.05rem;
  color: var(--coffee-soft);
}

/* ---------- space ---------- */
.space {
  background: var(--cream-deep);
  border-top: 1px solid rgba(61, 42, 32, 0.05);
  border-bottom: 1px solid rgba(61, 42, 32, 0.05);
}

.space-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: start;
}

.note-card {
  margin-top: 2rem;
  background: rgba(255, 252, 245, 0.8);
  border: 1px solid var(--cream-line);
  border-radius: 14px;
  padding: 1.15rem 1.3rem;
}

.note-label {
  display: block;
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--caramel);
  margin-bottom: 0.3rem;
}

.note-card p {
  font-size: 0.94rem;
  color: var(--muted);
}

.features {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--cream-line);
}

.feature {
  display: grid;
  grid-template-columns: 2.6rem minmax(0, 1fr);
  gap: 0.9rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--cream-line);
}

.feature-num {
  font-family: var(--display);
  font-size: 0.95rem;
  color: var(--caramel);
  letter-spacing: 0.08em;
  padding-top: 0.35rem;
}

.feature h3 {
  margin-bottom: 0.3rem;
}

.feature p {
  color: var(--muted);
  font-size: 0.95rem;
}

/* ---------- drinks ---------- */
.drinks {
  background: var(--cream);
}

.drink-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.1rem;
}

.drink {
  position: relative;
  background: #fffcf5;
  border: 1px solid var(--cream-line);
  border-radius: 18px;
  padding: 2rem 1.6rem 1.8rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 18px 40px -32px rgba(61, 42, 32, 0.55);
}

.drink-tag {
  align-self: flex-start;
  font-size: 0.64rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #8a5a33;
  background: rgba(217, 168, 108, 0.22);
  border-radius: 999px;
  padding: 0.22rem 0.6rem;
  margin-bottom: 1.2rem;
}

.drink-top {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px dashed rgba(61, 42, 32, 0.2);
  margin-bottom: 0.85rem;
}

.drink-top h3 {
  font-size: 1.32rem;
}

.drink-price {
  font-family: var(--display);
  font-size: 1.15rem;
  color: var(--coffee);
  white-space: nowrap;
}

.drink p {
  color: var(--muted);
  font-size: 0.94rem;
  line-height: 1.65;
}

.drink-note {
  margin-top: 1.6rem;
  font-size: 0.84rem;
  letter-spacing: 0.01em;
  color: var(--muted);
}

/* ---------- photos ---------- */
.photos-section {
  padding-bottom: clamp(4.5rem, 9vw, 6.5rem);
}

.gallery {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 430px 320px;
  gap: 1rem;
}

.shot {
  margin: 0;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: var(--cream-deep);
}

.shot img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.9s cubic-bezier(0.2, 0.6, 0.2, 1);
}

.shot:hover img {
  transform: scale(1.03);
}

.shot figcaption {
  position: absolute;
  left: 1.1rem;
  bottom: 1rem;
  font-size: 0.76rem;
  color: #fff8ee;
  background: rgba(45, 28, 19, 0.55);
  backdrop-filter: blur(6px);
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
}

.shot-wide {
  grid-column: 1 / 8;
  grid-row: 1;
}

.shot-tall {
  grid-column: 8 / 13;
  grid-row: 1;
}

.shot-low {
  grid-column: 1 / 13;
  grid-row: 2;
}

.shot-low img {
  object-position: center 60%;
}

.shot-tall img {
  object-position: center 58%;
}

a:focus-visible {
  outline: 2px solid var(--caramel);
  outline-offset: 4px;
  border-radius: 2px;
}

/* ---------- visit ---------- */
.visit {
  background: var(--cream-deep);
}

.visit-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: clamp(2.5rem, 5vw, 4.5rem);
  align-items: start;
}

.hours-list {
  list-style: none;
  margin: 1.8rem 0 0;
  padding: 0;
  border-top: 1px solid var(--cream-line);
}

.hours-list li {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--cream-line);
  font-size: 0.96rem;
}

.hours-day {
  color: var(--coffee);
}

.hours-dots {
  flex: 1;
  border-bottom: 1px dotted rgba(61, 42, 32, 0.3);
  transform: translateY(-3px);
}

.hours-time {
  font-family: var(--display);
  font-variant-numeric: tabular-nums;
  color: var(--coffee);
  white-space: nowrap;
}

.hours-note {
  margin-top: 1.1rem;
  font-size: 0.85rem;
  line-height: 1.65;
  color: var(--muted);
}

.find-block h2 {
  margin-bottom: 1.6rem;
}

.directions {
  list-style: none;
  counter-reset: step;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.9rem;
}

.directions li {
  position: relative;
  padding-left: 2.4rem;
  color: var(--muted);
  font-size: 0.94rem;
  line-height: 1.65;
}

.directions li::before {
  counter-increment: step;
  content: counter(step);
  position: absolute;
  left: 0;
  top: 0.1rem;
  width: 1.65rem;
  height: 1.65rem;
  border-radius: 50%;
  background: rgba(181, 121, 74, 0.14);
  color: #8a5a33;
  font-family: var(--display);
  font-size: 0.85rem;
  display: grid;
  place-items: center;
}

.directions span {
  display: block;
  color: var(--coffee);
  font-weight: 600;
  font-size: 0.92rem;
  margin-bottom: 0.1rem;
}

.contact {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 1.6rem;
  margin-top: 1.8rem;
  padding-top: 1.4rem;
  border-top: 1px solid var(--cream-line);
  font-size: 0.92rem;
}

.contact a,
.contact span {
  color: var(--coffee);
  text-decoration: none;
  background: transparent;
  padding: 0;
  border-bottom: 1px solid transparent;
  transition: border-color 0.25s ease, color 0.25s ease;
}

.contact a:hover,
.contact a:focus-visible {
  color: #8a5a33;
  background: transparent;
  border-bottom-color: rgba(138, 90, 51, 0.5);
}

.contact-note {
  margin-top: 1rem;
  font-size: 0.84rem;
  color: var(--muted);
}

/* ---------- footer ---------- */
.footer {
  background: var(--coffee);
  color: rgba(255, 248, 238, 0.75);
  padding: clamp(3rem, 6vw, 4.5rem) 0;
}

.footer-inner {
  display: grid;
  grid-template-columns: 1fr 1.4fr auto;
  gap: 2rem;
  align-items: start;
}

.footer-mark {
  font-family: var(--display);
  font-size: 1.55rem;
  color: #fff8ee;
  margin-bottom: 0.2rem;
}

.footer-line {
  font-size: 0.85rem;
  color: rgba(255, 248, 238, 0.55);
}

.disclaimer {
  font-size: 0.8rem;
  line-height: 1.65;
  color: rgba(255, 248, 238, 0.6);
  max-width: 44ch;
}

.disclaimer strong {
  color: rgba(255, 248, 238, 0.9);
  font-weight: 600;
}

.back {
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  color: rgba(255, 248, 238, 0.8);
  text-decoration: none;
  background: transparent;
  border-bottom: 1px solid rgba(255, 248, 238, 0.25);
  padding: 0 0 2px;
  white-space: nowrap;
}

.back:hover {
  color: #fff;
  background: transparent;
  border-bottom-color: #fff;
}

/* ---------- responsive ---------- */
@media (max-width: 900px) {
  .topbar-links {
    display: none;
  }

  .welcome-grid,
  .space-grid,
  .visit-grid,
  .section-head {
    grid-template-columns: 1fr;
  }

  .section-head {
    gap: 1rem;
    align-items: start;
  }

  .lead {
    max-width: none;
  }

  .drink-grid {
    grid-template-columns: 1fr;
  }

  .gallery {
    grid-template-columns: 1fr;
    grid-template-rows: none;
  }

  .shot-wide,
  .shot-tall,
  .shot-low {
    grid-column: 1 / -1;
    grid-row: auto;
    aspect-ratio: 4 / 3;
  }

  .shot-tall {
    aspect-ratio: 4 / 5;
  }

  .footer-inner {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }

  .scroll-cue {
    display: none;
  }
}

@media (max-width: 620px) {
  .page {
    font-size: 16px;
  }

  .wrap {
    width: min(1100px, 100% - 2.2rem);
  }

  .hero {
    min-height: 86vh;
  }

  .facts {
    gap: 0.45rem 1.1rem;
    font-size: 0.74rem;
  }

  .drink {
    padding: 1.6rem 1.35rem 1.5rem;
  }

  .shot-low img {
    object-position: center 50%;
  }

  .contact {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-cue span {
    animation: none;
  }

  .shot img {
    transition: none;
  }
}
</style>
