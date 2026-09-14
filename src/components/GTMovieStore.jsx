import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  gtAbout,
  gtAvatar,
  gtDark,
  gtInception,
  gtTitanic,
  gtmoviestore,
} from "../assets";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const LIVE_APP = "https://clairecleverlamb.pythonanywhere.com/home/";
const SOURCE_CODE = "https://github.com/clairecleverlamb/moviesstore";
const VIDEO_DEMO =
  "https://teams.microsoft.com/l/meetingrecap?driveId=b%21eJV9Gys39U6XBOTYOif_v3TxzFW-lpBGnaqmOrYSc34SaD6J4S4iSJu_7ddZt5pF&driveItemId=017IPDCCGQXLW7MN45RZCYKFOVXJUZKBM6&sitePath=https%3A%2F%2Fgtvault-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2Fschen3167_gatech_edu%2FIQDQuu32N52ORYUV1bpplQWeAY_OsCzZus1S9zEOOu25Tfg&fileUrl=https%3A%2F%2Fgtvault-my.sharepoint.com%2F%3Av%3A%2Fg%2Fpersonal%2Fschen3167_gatech_edu%2FIQDQuu32N52ORYUV1bpplQWeAY_OsCzZus1S9zEOOu25Tfg&threadId=19%3Ameeting_MDZiNTY3ZGUtNTUwMi00OWZmLTgyMmYtM2NlZGUwYTU1ZDdi%40thread.v2&organizerId=83d37123-6da8-4ee4-ba4b-77626301a831&tenantId=482198bb-ae7b-4b25-8b7a-6d7f32faa083&callId=e4f01ca4-9158-4068-88c1-d415e666a977&threadType=Meeting&meetingType=MeetNow&subType=RecapSharingLink_RecapChiclet";

const screens = [
  {
    title: "Home & About",
    stories: "1, 15, 16",
    image: gtAbout,
    body: "The Home hero introduces the store. About explains what GT Movie Store is for — browsing, purchasing, and learning about movies — so a first-time visitor can understand the product before creating an account.",
  },
  {
    title: "Movies catalog",
    stories: "4, 5",
    image: gtmoviestore,
    body: "The Movies page lists every title as a poster card. A search box filters by name so a shopper can jump to a film instead of scrolling the full catalog.",
  },
  {
    title: "Movie details & cart",
    stories: "6, 7, 13",
    image: gtInception,
    body: "A title page shows description, price, and artwork. Quantity plus Add to cart writes the selection into a session cart so the shopper can keep browsing before checkout.",
  },
  {
    title: "Reviews",
    stories: "8, 10, 11, 12, 21",
    image: gtDark,
    body: "Signed-in users write, edit, or delete their own comments. Anyone logged in can report someone else’s review; that comment is hidden immediately so the page stays usable.",
  },
];

const storyGroups = [
  {
    heading: "Learn the store",
    stories: "1 · 15 · 16",
    items: [
      "Home and About tell visitors what GT Movie Store is and how to use it.",
      "The live PythonAnywhere deploy lets anyone open it from a desktop browser.",
      "Bootstrap layouts keep Home, catalog, cart, and admin pages readable on phones and laptops.",
    ],
  },
  {
    heading: "Accounts",
    stories: "2 · 3",
    items: [
      "Sign Up creates a store account.",
      "Login unlocks reviews, checkout, and order history; Logout returns the navbar to guest links.",
    ],
  },
  {
    heading: "Browse and choose",
    stories: "4 · 5 · 13",
    items: [
      "Movies renders the full catalog.",
      "Search filters titles as the user types a name.",
      "The detail page shows artwork, price, and copy so a purchase decision has context.",
    ],
  },
  {
    heading: "Cart and orders",
    stories: "6 · 7 · 9 · 14",
    items: [
      "Cart lists every selected title with quantity and a running total.",
      "Add to cart accepts one or more copies of a movie.",
      "Remove all movies clears the session cart.",
      "Orders lists past purchases and spend after checkout.",
    ],
  },
  {
    heading: "Reviews",
    stories: "8 · 10 · 11 · 12 · 21",
    items: [
      "Movie pages show other shoppers’ comments.",
      "An owner can create, edit, or delete their review.",
      "Reporting a review hides it from the public list so the comment section stays clean.",
    ],
  },
  {
    heading: "Staff management",
    stories: "17 · 18 · 19 · 20",
    items: [
      "Administrators open Manage from the navbar.",
      "Staff can view, create, update, and delete users, movies, reviews, and orders inside the store — not only in Django admin.",
    ],
  },
];

const processSessions = [
  {
    session: "01",
    title: "Foundation",
    stories: "Stories 1, 15, 16",
    detail:
      "Scaffolded the Django project, Home, About, and a shared navbar. I kept this slice small on purpose so a visitor could already understand the product.",
  },
  {
    session: "02",
    title: "Catalog",
    stories: "Stories 4, 5, 13",
    detail:
      "Added the Movie model, list, search, and detail pages so selection had a real catalog behind it.",
  },
  {
    session: "03",
    title: "Accounts",
    stories: "Stories 2, 3",
    detail:
      "Registration, login, and logout. The navbar switches between guest and signed-in actions instead of exposing account pages to everyone.",
  },
  {
    session: "04",
    title: "Cart and orders",
    stories: "Stories 6, 7, 9, 14",
    detail:
      "Session cart, quantities, clear-cart, checkout, and an Orders page that tracks what was purchased and how much was spent.",
  },
  {
    session: "05",
    title: "Reviews",
    stories: "Stories 8, 10, 11, 12, 21",
    detail:
      "Create, read, edit, delete, and report. Reporting hides the comment immediately so story 21 is visible in the UI, not only in a database flag.",
  },
  {
    session: "06",
    title: "Staff tools & deploy",
    stories: "Stories 17–20, 15",
    detail:
      "Built in-app Manage pages for users, movies, reviews, and orders, then deployed to PythonAnywhere so the store is reachable from any desktop browser.",
  },
];

const SectionNav = () => (
  <nav className="sticky top-0 z-30 border-b border-gray-800/80 bg-primary/90 backdrop-blur-md">
    <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
      <Link
        to="/"
        className="text-light text-xl font-bold bg-gradient-to-r from-quaternary to-accent bg-clip-text text-transparent"
      >
        CC
      </Link>
      <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-400">
        <a href="#description" className="hover:text-light transition-colors">
          Description
        </a>
        <a href="#process" className="hover:text-light transition-colors">
          Process
        </a>
        <a href="#video" className="hover:text-light transition-colors">
          Video Demo
        </a>
      </div>
      <Link
        to="/#portfolio"
        className="text-sm font-semibold text-quaternary hover:text-light transition-colors"
      >
        ← Portfolio
      </Link>
    </div>
  </nav>
);

const VideoPanel = () => (
  <a
    href={VIDEO_DEMO}
    target="_blank"
    rel="noopener noreferrer"
    className="group block rounded-2xl overflow-hidden border border-gray-800 bg-tertiary/40 hover:border-quaternary/50 transition-colors"
  >
    <div className="relative">
      <img
        src={gtmoviestore}
        alt="GT Movie Store video demo"
        className="w-full aspect-video object-cover"
      />
      <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors flex flex-col items-center justify-center text-center px-6">
        <span className="w-16 h-16 rounded-full bg-quaternary text-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
          <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <p className="text-2xl font-bold mb-2">Watch Video Demo</p>
        <p className="text-gray-200 max-w-lg">
          Teams recording of the user-story walkthrough — Home, catalog, accounts, cart, reviews, and staff tools.
        </p>
      </div>
    </div>
  </a>
);

const GTMovieStore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative z-0 min-h-screen bg-primary text-light">
      <SectionNav />

      <header className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-b from-quaternary/10 via-transparent to-primary" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 pt-16 pb-14">
          <motion.p
            variants={textVariant()}
            initial="hidden"
            animate="show"
            className={`${styles.sectionSubText} mb-4`}
          >
            Case Study
          </motion.p>
          <motion.h1
            variants={textVariant(0.1)}
            initial="hidden"
            animate="show"
            className="text-light font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6"
          >
            GT Movie Store
          </motion.h1>
          <motion.p
            variants={fadeIn("up", "spring", 0.15, 0.7)}
            initial="hidden"
            animate="show"
            className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-3xl mb-8"
          >
            A full-stack Django store I designed and developed from 21 user
            stories: visitors can learn the product, create an account, search
            titles, check out a cart, leave reviews, and — if they are staff —
            manage the catalog from inside the app.
          </motion.p>
          <motion.div
            variants={fadeIn("up", "spring", 0.2, 0.7)}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-3 mb-10"
          >
            {["Django", "Python", "Bootstrap", "SQLite", "PythonAnywhere"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-quaternary/40 text-quaternary text-sm font-medium"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>
          <motion.div
            variants={fadeIn("up", "spring", 0.25, 0.7)}
            initial="hidden"
            animate="show"
            className="relative z-10 flex flex-wrap gap-4"
          >
            <a
              href={LIVE_APP}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-quaternary text-primary font-semibold rounded-lg hover:bg-quaternary/90 transition-all duration-300"
            >
              Open Live App
            </a>
            <a
              href={SOURCE_CODE}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-quaternary text-quaternary font-semibold rounded-lg hover:bg-quaternary hover:text-primary transition-all duration-300"
            >
              View Code
            </a>
            <a
              href={VIDEO_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-quaternary text-quaternary font-semibold rounded-lg hover:bg-quaternary hover:text-primary transition-all duration-300"
            >
              Video Demo
            </a>
          </motion.div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-8 pb-16">
          <img
            src={gtmoviestore}
            alt="GT Movie Store catalog posters"
            className="w-full rounded-2xl border border-gray-800 object-cover"
          />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-20 space-y-28">
        <section id="description" className="scroll-mt-24">
          <p className={styles.sectionSubText}>GT Movie Store Description</p>
          <h2 className="text-light font-bold text-3xl sm:text-4xl mt-3 mb-6">
            Screens mapped to the user stories
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
            I treated each required story as an acceptance test, not a backlog
            label. If a shopper or administrator could not complete the action
            from a real screen, the story was not done. Below is how the
            shipped UI answers those stories.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {screens.map((screen, index) => (
              <article
                key={screen.title}
                className="bg-tertiary/50 border border-gray-800 rounded-2xl overflow-hidden"
              >
                <img
                  src={screen.image}
                  alt={screen.title}
                  className={`w-full object-cover ${
                    index === 1 ? "h-56 object-center" : "h-56 object-top"
                  }`}
                />
                <div className="p-6">
                  <p className="text-quaternary text-xs font-semibold tracking-widest uppercase mb-2">
                    User stories {screen.stories}
                  </p>
                  <h3 className="text-xl font-bold mb-3">{screen.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{screen.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {storyGroups.map((group) => (
              <article
                key={group.heading}
                className="rounded-2xl border border-gray-800 bg-tertiary/40 p-6"
              >
                <p className="text-quaternary text-xs font-semibold tracking-widest uppercase mb-2">
                  {group.stories}
                </p>
                <h3 className="text-xl font-bold mb-4">{group.heading}</h3>
                <ul className="space-y-3 text-gray-300 leading-relaxed">
                  {group.items.map((item) => (
                    <li key={item} className="pl-4 border-l border-quaternary/40">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-gray-800 p-8 bg-gradient-to-r from-quaternary/10 to-accent/10">
            <h3 className="text-2xl font-bold mb-3">How the flows connect</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              A guest can read About, browse Movies, search, and open a title.
              Creating an account unlocks reviews and checkout. After purchase,
              Orders shows history and spend. Staff see a Manage link that
              opens dashboards for users, movies, reviews (including hidden
              reports), and orders. That path is the 21 stories in the order a
              real person would walk them.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-400">
              {[gtInception, gtAvatar, gtDark, gtTitanic].map((poster, i) => (
                <img
                  key={i}
                  src={poster}
                  alt=""
                  className="h-20 w-14 rounded-md object-cover border border-gray-700"
                />
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="scroll-mt-24">
          <p className={styles.sectionSubText}>Process description</p>
          <h2 className="text-light font-bold text-3xl sm:text-4xl mt-3 mb-6">
            How I built it, and how I handled questions
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
            I followed an iterative, user-story-driven process — close to a
            lightweight Scrum: one vertical slice per session, demonstrate it,
            then take the next story. I did not start from a feature dump. Each
            increment had to be usable in the browser before I opened the next
            file.
          </p>

          <div className="space-y-6 mb-16">
            {processSessions.map((item) => (
              <article
                key={item.session}
                className="grid sm:grid-cols-[88px_1fr] gap-4 sm:gap-8 items-start rounded-2xl border border-gray-800 bg-tertiary/40 p-6"
              >
                <span className="text-quaternary font-mono text-3xl font-bold">
                  {item.session}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="text-sm text-gray-400">{item.stories}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-2xl border border-gray-800 p-8">
            <h3 className="text-2xl font-bold mb-6">Navigating the open questions</h3>
            <ol className="space-y-6">
              <li>
                <p className="text-quaternary font-semibold mb-1">
                  Scope vs. the next story
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Early on it was tempting to stand up accounts, movies, and
                  cart together. Story 1 only asked that a visitor could learn
                  what the store is. I rolled the extra apps back, shipped Home
                  and About, and only then added the next slice. That kept the
                  logbook honest and made each demo easy to narrate.
                </p>
              </li>
              <li>
                <p className="text-quaternary font-semibold mb-1">
                  Django admin vs. in-app management
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Stories 17–20 say an administrator should manage users,
                  movies, reviews, and orders <em>from the GT Movie Store</em>.
                  The built-in admin site technically can CRUD those models, but
                  it is not the store. I read that as a product requirement and
                  built a staff-only Manage area in the same navbar and visual
                  language as the shop.
                </p>
              </li>
              <li>
                <p className="text-quaternary font-semibold mb-1">
                  What “report a review” means
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Story 21 asks that an inappropriate review leave the page
                  going forward. I implemented report as an immediate hide for
                  other shoppers, while staff can still see, restore, or delete
                  the comment under Manage → Reviews. That matches the story
                  without throwing data away.
                </p>
              </li>
              <li>
                <p className="text-quaternary font-semibold mb-1">
                  “Access from any desktop browser”
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Story 15 is a deployment story. Localhost would not satisfy
                  it, so I published the app on PythonAnywhere and verified the
                  Home, catalog, cart, and auth routes on the public URL.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section id="video" className="scroll-mt-24">
          <p className={styles.sectionSubText}>Video Demo</p>
          <h2 className="text-light font-bold text-3xl sm:text-4xl mt-3 mb-6">
            Recorded walkthrough
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-8">
            I recorded the build and the finished flows while implementing the
            stories — Home and About first, then catalog, accounts, cart,
            reviews, and staff tools. The demo opens the Teams recording of
            that walkthrough.
          </p>
          <VideoPanel />
          <p className="text-gray-400 mt-4">
            <a
              href={VIDEO_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="text-quaternary hover:underline"
            >
              Open the Video Demo
            </a>
            {" "}or{" "}
            <a
              href={LIVE_APP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-quaternary hover:underline"
            >
              try the live store
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
};

export default GTMovieStore;
