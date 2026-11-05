import type { Route } from "./+types/home";

const projects = [
  {
    number: "01",
    name: "Northstar",
    type: "Brand strategy · Digital",
    description:
      "A clearer, more confident digital home for a new generation of financial tools.",
    wordmark: "northstar",
    headline: "A better way forward.",
    background: "bg-[#dce7dc]",
    accent: "bg-[#b8d2ba]",
    ink: "text-[#315040]",
    shape: "rounded-full",
  },
  {
    number: "02",
    name: "Goodside",
    type: "Product design · Development",
    description:
      "Making everyday sustainability feel simple, useful, and genuinely rewarding.",
    wordmark: "goodside",
    headline: "Small steps. Brighter days.",
    background: "bg-[#f3dfce]",
    accent: "bg-[#ed9774]",
    ink: "text-[#507e5d]",
    shape: "rounded-[60%_40%_55%_45%]",
  },
  {
    number: "03",
    name: "Objects in Play",
    type: "Art direction · E-commerce",
    description:
      "An expressive storefront that gives independent makers room to stand out.",
    wordmark: "objects in play",
    headline: "Made to be kept.",
    background: "bg-[#ddd9eb]",
    accent: "bg-[#b6a8cd]",
    ink: "text-[#58456d]",
    shape: "rounded-t-full rounded-br-full",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alex Morgan — Designer & Developer" },
    {
      name: "description",
      content:
        "Alex Morgan is an independent designer and developer creating thoughtful digital experiences for people and brands.",
    },
  ];
}

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="size-4 shrink-0"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path
          d="M5 15 15 5M6 5h9v9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M3.5 10h12m-5-5 5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function SparkleIcon({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={className} fill="currentColor">
      <path d="M10 0c1.2 6.3 3.7 8.8 10 10-6.3 1.2-8.8 3.7-10 10C8.8 13.7 6.3 11.2 0 10 6.3 8.8 8.8 6.3 10 0Z" />
    </svg>
  );
}

function FlowerIllustration() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 180 180"
      className="size-36 drop-shadow-sm sm:size-40"
    >
      <g fill="#d4ef76" stroke="#282a23" strokeWidth="1.5">
        <ellipse cx="90" cy="48" rx="18" ry="40" />
        <ellipse cx="90" cy="48" rx="18" ry="40" transform="rotate(60 90 90)" />
        <ellipse cx="90" cy="48" rx="18" ry="40" transform="rotate(120 90 90)" />
        <ellipse cx="90" cy="48" rx="18" ry="40" transform="rotate(180 90 90)" />
        <ellipse cx="90" cy="48" rx="18" ry="40" transform="rotate(240 90 90)" />
        <ellipse cx="90" cy="48" rx="18" ry="40" transform="rotate(300 90 90)" />
      </g>
      <circle cx="90" cy="90" r="13" fill="#ef8065" stroke="#282a23" strokeWidth="1.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f7f7f3] font-sans text-[#24251f] antialiased selection:bg-[#d3ef75]">
      <header className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between border-b border-[#dedfd7] px-5 sm:h-[88px] sm:px-8 lg:px-12">
        <a
          className="text-[30px] font-extrabold tracking-[-0.09em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#849d36]"
          href="#home"
          aria-label="Alex Morgan, home"
        >
          am<span className="text-[#a4c73b]">.</span>
        </a>
        <nav className="flex items-center gap-4 text-[11px] font-medium sm:gap-9 sm:text-xs" aria-label="Main navigation">
          <a className="transition-opacity hover:opacity-60" href="#work">Work</a>
          <a className="transition-opacity hover:opacity-60" href="#about">About</a>
          <a
            className="inline-flex items-center gap-1.5 rounded-full border border-[#dedfd7] px-3 py-2.5 transition-colors hover:border-[#24251f] sm:gap-2 sm:px-4"
            href="#contact"
          >
            Let&apos;s talk <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <section
        className="relative mx-auto grid min-h-[calc(100svh-76px)] w-full max-w-7xl items-center gap-2 px-5 py-12 sm:min-h-[650px] sm:px-8 sm:py-16 lg:grid-cols-[1.03fr_0.97fr] lg:px-12 lg:py-20"
        id="home"
      >
        <div className="relative z-10">
          <p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#77786f] sm:text-[10px]">
            <span className="size-2 rounded-full bg-[#9fbd45] ring-4 ring-[#eaf0d7]" />
            Independent designer &amp; developer
          </p>
          <h1 className="mt-7 text-[clamp(3.5rem,10vw,5.25rem)] font-medium leading-[0.95] tracking-[-0.085em] sm:mt-8 sm:text-[clamp(4.5rem,7vw,5.75rem)]">
            Making the
            <br />
            internet feel
            <br />
            <span className="font-serif font-normal italic tracking-[-0.075em]">
              more human.
            </span>
          </h1>
          <div className="mt-8 sm:mt-10">
            <p className="max-w-[340px] text-[13px] leading-7 text-[#696a62]">
              Hey, I&apos;m Alex — I turn thoughtful ideas into useful, memorable
              digital experiences.
            </p>
            <a
              className="mt-5 inline-flex items-center gap-3 border-b border-[#aeb19f] pb-1.5 text-[11px] font-semibold transition-[gap] hover:gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#849d36]"
              href="#work"
            >
              Explore my work <ArrowIcon />
            </a>
          </div>
        </div>

        <div
          className="relative mx-auto flex h-[350px] w-full max-w-[500px] items-center justify-center sm:h-[450px]"
          role="img"
          aria-label="A playful flower illustration on a field notes card"
        >
          <div className="absolute left-1/2 top-1/2 size-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e6edcc] sm:size-[350px]" />
          <div className="absolute left-1/2 top-1/2 h-[190px] w-[280px] -translate-x-1/2 -translate-y-1/2 rotate-[-31deg] rounded-[50%] border border-[#d5dcc0] sm:h-[245px] sm:w-[430px]" />
          <div className="absolute left-1/2 top-1/2 h-[165px] w-[280px] -translate-x-1/2 -translate-y-1/2 rotate-[54deg] rounded-[50%] border border-[#d5dcc0] sm:h-[185px] sm:w-[466px]" />
          <div className="relative z-10 h-[300px] w-[238px] rotate-[5deg] bg-[#fefefb] p-4 shadow-[0_20px_70px_rgba(72,80,43,0.12)] sm:h-[352px] sm:w-[278px] sm:p-[18px]">
            <div className="flex justify-between text-[7px] font-semibold tracking-[0.11em] text-[#818377]">
              <span>FIELD NOTES&nbsp; / &nbsp;001</span>
              <span>2025</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <FlowerIllustration />
            </div>
            <div className="absolute inset-x-4 bottom-3 flex items-center justify-between text-[8px] text-[#515248] sm:inset-x-[18px] sm:bottom-4">
              <span>Curiosity, in bloom.</span>
              <SparkleIcon className="size-4" />
            </div>
          </div>
          <SparkleIcon className="absolute right-[8%] top-[12%] size-6 text-[#e87a60]" />
          <SparkleIcon className="absolute bottom-[14%] left-[8%] size-4 text-[#a1bc49]" />
          <span className="absolute bottom-[8%] right-0 rotate-[-8deg] font-serif text-sm italic text-[#77786f]">
            A little room to imagine.
          </span>
        </div>

        <a
          className="absolute bottom-5 left-5 inline-flex items-center gap-3 text-[9px] tracking-wide text-[#77786f] sm:bottom-7 sm:left-8 lg:left-12"
          href="#work"
        >
          <span className="h-px w-9 bg-[#afb0a8]" />
          Scroll to explore
        </a>
      </section>

      <section className="bg-[#eeefe9] py-20 sm:py-24 lg:py-28" id="work">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:mb-11 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#77786f]">
                A few things I&apos;ve made
              </p>
              <h2 className="mt-3 text-4xl font-medium tracking-[-0.07em] sm:text-5xl">
                Selected work<span className="text-[#a4c73b]">.</span>
              </h2>
            </div>
            <p className="font-serif text-[13px] italic leading-6 text-[#77786f] sm:text-right">
              Good work starts with good questions.
              <br />
              Here are a few answers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.number} className="group">
                <div className={`relative grid h-[clamp(230px,35vw,300px)] place-items-center overflow-hidden ${project.background}`}>
                  <div className="w-[76%] overflow-hidden bg-[#f9f8f2] shadow-[0_13px_35px_rgba(41,41,31,0.1)] transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:rotate-[-1deg]">
                    <div className="flex h-7 items-center gap-1.5 border-b border-[#e8e7df] px-3">
                      <span className="size-1 rounded-full bg-[#bbbcb2]" />
                      <span className="size-1 rounded-full bg-[#bbbcb2]" />
                      <span className="size-1 rounded-full bg-[#bbbcb2]" />
                      <span className="ml-auto text-[6px] tracking-[0.1em] text-[#88897f]">
                        STUDIO / {project.number}
                      </span>
                    </div>
                    <div className={`relative flex h-[190px] flex-col items-start p-5 sm:h-[180px] ${project.ink}`}>
                      <span className={`relative z-10 ${project.number === "02" ? "font-sans text-xs font-bold tracking-[-0.04em]" : "font-serif text-base tracking-[-0.06em]"}`}>
                        {project.wordmark}
                      </span>
                      <span className="relative z-10 mt-4 max-w-[145px] font-serif text-2xl leading-none tracking-[-0.06em]">
                        {project.headline}
                      </span>
                      <span className={`absolute -bottom-5 right-[8%] size-[105px] ${project.accent} ${project.shape}`} />
                      <span className="relative z-10 mt-auto font-serif text-[8px] italic text-[#66675f]">
                        Thoughtfully made, for what&apos;s next.
                      </span>
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 text-[8px] font-semibold text-[#42443d]">
                    {project.number}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 pt-4">
                  <div>
                    <p className="mb-2 text-[9px] text-[#77786f]">{project.type}</p>
                    <h3 className="text-xl font-medium tracking-[-0.05em]">{project.name}</h3>
                    <p className="mt-2 max-w-[300px] text-[11px] leading-5 text-[#72736a]">
                      {project.description}
                    </p>
                  </div>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-[#d3d4ca] transition-colors group-hover:border-[#d3ef75] group-hover:bg-[#d3ef75]">
                    <ArrowIcon diagonal />
                  </span>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center font-serif text-xs italic text-[#77786f]">
            More good things are in the works.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28" id="about">
        <div className="relative mx-auto grid w-full max-w-7xl gap-7 px-5 sm:grid-cols-[0.65fr_1.6fr] sm:gap-9 sm:px-8 lg:grid-cols-[0.72fr_1.5fr_0.55fr] lg:gap-12 lg:px-12">
          <div>
            <p className="pr-20 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#77786f]">
              A little about me
            </p>
            <span className="mt-16 hidden font-serif text-5xl text-[#a4bd55] sm:block">↘</span>
          </div>
          <div className="pr-0 sm:pr-12 lg:pr-0">
            <h2 className="text-[clamp(2.2rem,5vw,2.9rem)] font-medium leading-[1.1] tracking-[-0.07em]">
              Part curious mind,
              <br />
              part pixel perfectionist.
            </h2>
            <p className="mt-5 max-w-[540px] text-xs leading-7 text-[#707168]">
              I&apos;m an independent creative partner who loves bringing people,
              design, and technology together. From the first rough sketch to the
              final launch, I make digital things that feel considered, clear,
              and a little unexpected.
            </p>
            <div className="mt-5 flex flex-wrap gap-2" aria-label="Areas of expertise">
              {["Digital strategy", "Visual identity", "Product design", "Creative development"].map((skill) => (
                <span key={skill} className="rounded-full border border-[#dedfd7] px-3 py-2 text-[9px] text-[#62635b]">
                  {skill}
                </span>
              ))}
            </div>
            <a
              className="mt-6 inline-flex items-center gap-3 border-b border-[#aeb19f] pb-1.5 text-[11px] font-semibold transition-[gap] hover:gap-4"
              href="mailto:hello@alexmorgan.dev"
            >
              Tell me about your project <ArrowIcon />
            </a>
          </div>
          <div className="absolute right-5 top-0 flex size-[70px] -translate-y-2 rotate-[10deg] flex-col items-center justify-center gap-1 rounded-full border border-[#b9c68d] text-[6px] font-semibold tracking-[0.12em] text-[#647337] sm:right-8 sm:top-auto sm:bottom-0 sm:size-20 sm:translate-y-1/4 lg:relative lg:right-auto lg:top-auto lg:bottom-auto lg:size-[106px] lg:translate-y-0 lg:self-center">
            <span>GOOD IDEAS</span>
            <SparkleIcon className="size-6" />
            <span>GROW HERE</span>
          </div>
        </div>
      </section>

      <footer className="bg-[#292b24] pt-20 text-[#f7f7f3] sm:pt-24" id="contact">
        <div className="mx-auto w-full max-w-7xl px-5 text-center sm:px-8 lg:px-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#b8bcaa]">
            Have a good one in mind?
          </p>
          <h2 className="mt-5 text-[clamp(3.3rem,9vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.08em]">
            Let&apos;s make
            <br />
            <span className="font-serif font-normal italic tracking-[-0.075em] text-[#d4ed83]">
              something matter.
            </span>
          </h2>
          <a
            className="mt-7 inline-flex items-center gap-2 border-b border-[#73766a] pb-2 text-xs transition-colors hover:text-[#d3ef75]"
            href="mailto:hello@alexmorgan.dev"
          >
            hello@alexmorgan.dev <ArrowIcon diagonal />
          </a>

          <div className="mt-16 flex min-h-20 flex-wrap items-center justify-between gap-x-5 gap-y-4 border-t border-[#494b43] py-5 text-[9px] text-[#b9baaf] sm:mt-20">
            <a className="text-[25px] font-extrabold tracking-[-0.09em] text-[#f7f7f3]" href="#home">
              am<span className="text-[#a4c73b]">.</span>
            </a>
            <span className="order-last w-full text-left sm:order-none sm:w-auto">
              Independent by nature. Collaborative by choice.
            </span>
            <div className="flex gap-3 sm:gap-5">
              <a className="inline-flex items-center gap-1 hover:text-white" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                LinkedIn <ArrowIcon diagonal />
              </a>
              <a className="inline-flex items-center gap-1 hover:text-white" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                Instagram <ArrowIcon diagonal />
              </a>
            </div>
            <span>© {new Date().getFullYear()} Alex Morgan</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
