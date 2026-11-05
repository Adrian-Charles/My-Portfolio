import type { Route } from "./+types/home";

const projects = [
  {
    number: "01",
    name: "FindMyStuff",
    type: "Full-stack development · Capstone project",
    description:
      "A lost-and-found management system with admin tools, smart matching, claim verification, and real-time reporting.",
    wordmark: "find my stuff",
    headline: "Helping things find their way home.",
    background: "bg-[#252b27]",
    accent: "bg-[#718b73]",
    ink: "text-[#dce8dc]",
    shape: "rounded-full",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Adrian Charles - Portfolio" },
    {
      name: "description",
      content:
        "Software engineering intern and BSIT graduate building practical web applications with TypeScript, React, PHP, SQL, and Firebase.",
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

function PixelPortraitLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/images/adrian-charles-pixel.png"
      alt=""
      aria-hidden="true"
      className={`aspect-square object-cover ring-1 ring-white/15 ${className}`}
      style={{ imageRendering: "pixelated" }}
    />
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
    <main className="overflow-hidden bg-[#111312] font-sans text-[#f2f3ef] antialiased selection:bg-[#c9d6a3] selection:text-[#111312]">
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-50 -translate-y-20 rounded-full bg-[#d3ef75] px-4 py-2 text-xs font-semibold text-[#111312] transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <header className="mx-auto flex h-[76px] w-full max-w-[1720px] items-center justify-between border-b border-white/10 px-5 sm:h-[88px] sm:px-8 lg:px-12">
        <a
          className="block size-10 overflow-hidden rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#849d36] sm:size-11"
          href="#home"
          aria-label="Adrian Charles, home"
        >
          <PixelPortraitLogo className="size-full rounded-md" />
        </a>
        <nav className="flex items-center gap-3 text-[10px] font-medium sm:gap-7 sm:text-xs" aria-label="Main navigation">
          <a className="hidden min-h-11 items-center transition-colors hover:text-[#d3ef75] sm:flex" href="#work">Projects</a>
          <a className="flex min-h-11 items-center transition-colors hover:text-[#d3ef75]" href="#about">About</a>
          <a className="hidden min-h-11 items-center transition-colors hover:text-[#d3ef75] md:flex" href="#skills">Skills</a>
          <a
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-white/20 px-3 transition-colors hover:border-[#d3ef75] hover:text-[#d3ef75] sm:gap-2 sm:px-4"
            href="#contact"
          >
            Let&apos;s talk <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <section
        className="relative mx-auto grid min-h-[calc(100svh-76px)] w-full max-w-[1720px] items-center gap-10 px-5 py-12 sm:min-h-[650px] sm:px-8 sm:py-16 lg:grid-cols-[1fr_1fr] lg:px-12 lg:py-20"
        id="home"
      >
        <div className="relative z-10" id="main-content">
          <p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#a9aca5] sm:text-[10px]">
            <span className="size-2 rounded-full bg-[#b7c98a] ring-4 ring-[#23251f]" />
            Software Engineer · BSIT Graduate
          </p>
          <h1 className="mt-7 text-[clamp(2.65rem,11vw,6.75rem)] font-medium leading-[0.95] tracking-[-0.085em] sm:mt-8">
            Building useful
            <br />
            software with
            <br />
            <span className="font-serif font-normal italic tracking-[-0.075em]">
              real-world impact.
            </span>
          </h1>
          <div className="mt-8 sm:mt-10">
            <p className="max-w-[340px] text-[13px] leading-7 text-[#adb0a7]">
              Hi, I&apos;m Adrian — a software engineer focused on web applications,
              database integration, and dependable digital solutions.
            </p>
            <a
              className="mt-5 inline-flex items-center gap-3 border-b border-white/25 pb-1.5 text-[11px] font-semibold transition-[gap] hover:gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b7c98a]"
              href="#work"
            >
              Explore my work <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex h-[350px] w-full max-w-[500px] items-center justify-center sm:h-[450px]">
          <div className="absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-[440px] sm:w-[440px]" />
          <div className="relative h-[310px] w-[235px] overflow-hidden rounded-[160px_160px_18px_18px] border border-white/15 bg-[#1b1e1a] shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:h-[440px] sm:w-[340px]">
            <img
              src="/images/adrian-charles.jpg"
              alt="Adrian Charles"
              className="h-full w-full object-cover object-[center_35%]"
              width="768"
              height="1154"
              fetchPriority="high"
            />
          </div>
          <span className="absolute bottom-[4%] right-[4%] rounded-full border border-white/15 bg-[#111312]/90 px-3 py-2 text-[9px] tracking-[0.08em] text-[#c9d6a3]">
            REACT / PHP / SQL / FIREBASE
          </span>
        </div>

        <a
          className="absolute bottom-5 left-5 inline-flex items-center gap-3 text-[9px] tracking-wide text-[#8f9389] sm:bottom-7 sm:left-8 lg:left-12"
          href="#work"
        >
          <span className="h-px w-9 bg-white/25" />
          Scroll to explore
        </a>
      </section>

      <section className="border-t border-white/10 bg-[#171a18] py-20 sm:py-24 lg:py-28" id="work">
        <div className="mx-auto w-full max-w-[1720px] px-5 sm:px-8 lg:px-12">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:mb-11 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#92978e]">
                Featured project
              </p>
              <h2 className="mt-3 text-4xl font-medium tracking-[-0.07em] sm:text-5xl">
                FindMyStuff<span className="text-[#a4c73b]">.</span>
              </h2>
            </div>
            <p className="font-serif text-[13px] italic leading-6 text-[#92978e] sm:text-right">
              Built to solve a practical problem.
              <br />
              Designed for clear, reliable use.
            </p>
          </div>

          <div className="grid grid-cols-1 justify-items-start gap-8 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-3">
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
                    <p className="mb-2 text-[9px] text-[#92978e]">{project.type}</p>
                    <h3 className="text-xl font-medium tracking-[-0.05em]">{project.name}</h3>
                    <p className="mt-2 max-w-[300px] text-[11px] leading-5 text-[#a8aba2]">
                      {project.description}
                    </p>
                  </div>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/15 transition-colors group-hover:border-[#d3ef75] group-hover:bg-[#d3ef75] group-hover:text-[#111312]">
                    <ArrowIcon diagonal />
                  </span>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center font-serif text-xs italic text-[#92978e]">
            A practical full-stack solution from requirements to implementation.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 py-20 sm:py-24 lg:py-28" id="about">
        <div className="relative mx-auto grid w-full max-w-[1720px] gap-7 px-5 sm:grid-cols-[0.65fr_1.6fr] sm:gap-9 sm:px-8 lg:grid-cols-[0.72fr_1.5fr_0.55fr] lg:gap-12 lg:px-12">
          <div>
            <p className="pr-20 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#92978e]">
              Experience &amp; education
            </p>
            <span className="mt-16 hidden font-serif text-5xl text-[#a4bd55] sm:block">↘</span>
          </div>
          <div className="pr-0 sm:pr-12 lg:pr-0">
            <h2 className="text-[clamp(2.2rem,5vw,2.9rem)] font-medium leading-[1.1] tracking-[-0.07em]">
              Engineering-minded,
              <br />
              delivery-focused.
            </h2>
            <p className="mt-5 max-w-[540px] text-xs leading-7 text-[#a8aba2]">
              I&apos;m an aspiring software engineer with hands-on experience developing
              and maintaining web application modules. During my internship, I
              implemented frontend features, resolved backend exceptions, improved
              validation and data handling, and collaborated through Agile workflows,
              Azure DevOps, code reviews, and team testing.
            </p>
            <div className="mt-5 flex flex-wrap gap-2" id="skills" aria-label="Technical skills">
              {["TypeScript", "JavaScript", "React", "PHP", "SQL", "Firebase", "Java", "C#", "C++", "REST APIs"].map((skill) => (
                <span key={skill} className="rounded-full border border-white/15 px-3 py-2 text-[9px] text-[#b7bab0]">
                  {skill}
                </span>
              ))}
            </div>
            <a
              className="mt-6 inline-flex items-center gap-3 border-b border-[#aeb19f] pb-1.5 text-[11px] font-semibold transition-[gap] hover:gap-4"
              href="mailto:cristobaladrian090556@gmail.com"
            >
              cristobaladrian090556@gmail.com <ArrowIcon />
            </a>
            <p className="mt-5 text-[10px] leading-6 text-[#92978e]">
              <strong className="font-semibold text-[#d8dbd2]">Education</strong>
              <br />
              BS Information Technology · Bulacan State University
              <br />
              Meneses Campus · 2022–2026
            </p>
          </div>
          <div className="absolute right-5 top-0 flex size-[70px] -translate-y-2 rotate-[10deg] flex-col items-center justify-center gap-1 rounded-full border border-[#b9c68d] text-[6px] font-semibold tracking-[0.12em] text-[#647337] sm:right-8 sm:top-auto sm:bottom-0 sm:size-20 sm:translate-y-1/4 lg:relative lg:right-auto lg:top-auto lg:bottom-auto lg:size-[106px] lg:translate-y-0 lg:self-center">
            <span>BSIT GRADUATE</span>
            <SparkleIcon className="size-6" />
            <span>2026</span>
          </div>
        </div>
      </section>

      <footer className="bg-[#292b24] pt-20 text-[#f7f7f3] sm:pt-24" id="contact">
        <div className="mx-auto w-full max-w-[1720px] px-5 text-center sm:px-8 lg:px-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#b8bcaa]">
            Looking for the next opportunity?
          </p>
          <h2 className="mt-5 text-[clamp(3.3rem,9vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.08em]">
            Let&apos;s build
            <br />
            <span className="font-serif font-normal italic tracking-[-0.075em] text-[#d4ed83]">
              something reliable.
            </span>
          </h2>
          <a
            className="mt-7 inline-flex items-center gap-2 border-b border-[#73766a] pb-2 text-xs transition-colors hover:text-[#d3ef75]"
            href="mailto:cristobaladrian090556@gmail.com"
          >
            cristobaladrian090556@gmail.com <ArrowIcon diagonal />
          </a>

          <div className="mt-16 flex min-h-20 flex-wrap items-center justify-between gap-x-5 gap-y-4 border-t border-[#494b43] py-5 text-[9px] text-[#b9baaf] sm:mt-20">
            <a className="block size-8 overflow-hidden rounded-md" href="#home" aria-label="Adrian Charles, home">
              <PixelPortraitLogo className="size-full rounded-md" />
            </a>
            <span className="order-last w-full text-left sm:order-none sm:w-auto">
              Software engineering intern · Open to junior opportunities.
            </span>
            <div className="flex gap-3 sm:gap-5">
              <a className="inline-flex items-center gap-1 hover:text-white" href="https://www.linkedin.com/in/adrian-cristobal-835099259/" target="_blank" rel="noreferrer">
                LinkedIn <ArrowIcon diagonal />
              </a>
              <a className="inline-flex items-center gap-1 hover:text-white" href="mailto:cristobaladrian090556@gmail.com">
                Email <ArrowIcon diagonal />
              </a>
            </div>
            <span>© {new Date().getFullYear()} Adrian Charles</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
