
import { useState } from "react";

const projects = [
  {
    title: "Lumen LMS",
    description:
      "A Learning Management System designed to improve digital learning, student management and the overall learning experience.",
    tech: "React • TypeScript • Web Development",
    github: "https://github.com/Prajha-Shree/lumen-lms",
  },
  {
    title: "Machine Learning Projects",
    description:
      "Practical ML implementations involving clustering, classification and recommendation systems.",
    tech: "Python • Scikit-learn • Machine Learning",
    github: "",
  },
  {
    title: "AI & Web Applications",
    description:
      "Building intelligent and user-friendly applications using modern technologies.",
    tech: "AI • React • Python",
    github: "",
  },
];

const navigation = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050908] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050908]/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-bold text-emerald-400"
          >
            PS<span className="text-white">.</span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            {navigation.map(([label, link]) => (
              <a
                key={label}
                href={link}
                className="transition hover:text-emerald-400"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">

            <a
              href="#contact"
              className="hidden rounded-full border border-emerald-400 px-5 py-2 text-sm text-emerald-400 transition hover:bg-emerald-400 hover:text-black sm:inline-block"
            >
              Let's Talk
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-emerald-400 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>

          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <div className="flex flex-col gap-5 border-t border-white/10 bg-[#050908] px-6 py-6 text-gray-300 md:hidden">
            {navigation.map(([label, link]) => (
              <a
                key={label}
                href={link}
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-emerald-400"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
      >
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-2">

          {/* INTRODUCTION */}
          <div className="animate-fade-up">

            <p className="mb-5 font-medium tracking-[4px] text-emerald-400">
              HELLO, WELCOME TO MY PORTFOLIO
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              I'm <span className="text-emerald-400">Prajha</span>
              <br />
              Shree.
            </h1>

            <h2 className="mt-5 text-xl font-semibold leading-relaxed text-gray-300 md:text-2xl">
  Computer Science Student
  <span className="text-emerald-400"> | </span>
  Software Developer
</h2>

            <p className="mt-6 max-w-lg leading-8 text-gray-400">
              Passionate about technology, programming and innovation.
              I enjoy solving problems, exploring Artificial Intelligence
              and building creative solutions that make a difference.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-full bg-emerald-400 px-7 py-3 font-semibold text-black transition hover:bg-emerald-300"
              >
                Explore My Work →
              </a>

              <a
                href="/resume.pdf"
                download
                className="rounded-full border border-emerald-400 px-7 py-3 font-semibold text-emerald-400 transition hover:bg-emerald-400 hover:text-black"
              >
                Download Resume ↓
              </a>

            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-10 flex flex-wrap gap-7 text-sm text-gray-400">

              <a
                href="https://github.com/Prajha-Shree"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/prajha-shree-p1512/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://leetcode.com/u/PRAJHA_SHREE_P/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400"
              >
                LeetCode ↗
              </a>

            </div>
          </div>

          {/* PROFILE PHOTO */}
          <div className="flex justify-center animate-float">

            <div className="relative rounded-3xl border border-emerald-400/40 bg-white p-2 shadow-[0_0_80px_rgba(16,185,129,0.18)]">

              <img
                src="/profile.png"
                alt="Prajha Shree - Profile"
                className="h-[380px] w-[300px] rounded-2xl object-cover object-top"
              />

              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-emerald-400/40 bg-[#071510] px-6 py-3 text-sm text-emerald-400">
                Developer in Progress ✨
              </div>

            </div>
          </div>

        </div>
      </section>

      
{/* ABOUT SECTION */}
<section id="about" className="relative overflow-hidden px-6 py-24">

  <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-emerald-500/5 blur-[100px]" />

  <div className="relative mx-auto max-w-6xl">

    <p className="text-sm font-semibold tracking-[4px] text-emerald-400">
      GET TO KNOW ME
    </p>

    <h2 className="mt-3 text-4xl font-bold md:text-5xl">
      About <span className="text-emerald-400">Me.</span>
    </h2>

    <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start">

      <div>
        <h3 className="text-2xl font-semibold leading-relaxed">
          Turning curiosity into
          <span className="text-emerald-400"> meaningful solutions.</span>
        </h3>

        <p className="mt-6 leading-8 text-gray-400">
          I am a Computer Science and Engineering student with a
          strong interest in software development, Artificial
          Intelligence and Machine Learning. I enjoy exploring
          new technologies, writing code and building practical
          solutions to real-world problems.
        </p>

        <p className="mt-5 leading-8 text-gray-400">
          I believe in continuous learning, creative thinking
          and effective communication. I enjoy taking on
          technical challenges, collaborating with others
          and transforming ideas into meaningful projects.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">

        {[
          {
            title: "Software Development",
            description: "Building useful and user-friendly applications.",
            icon: "💻",
          },
          {
            title: "AI & Machine Learning",
            description: "Exploring intelligent solutions and ML concepts.",
            icon: "🤖",
          },
          {
            title: "Problem Solving",
            description: "Enjoying coding challenges and logical thinking.",
            icon: "🧩",
          },
          {
            title: "Communication",
            description: "Sharing ideas and working effectively with others.",
            icon: "🤝",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/60"
          >
            <div className="text-3xl">{item.icon}</div>

            <h4 className="mt-4 font-semibold text-white">
              {item.title}
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </div>
  </div>
</section>


      
{/* SKILLS SECTION */}
<section id="skills" className="relative overflow-hidden bg-white/[0.02] px-6 py-24">

  <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-emerald-500/5 blur-[100px]" />

  <div className="relative mx-auto max-w-6xl">

    <p className="text-sm font-semibold tracking-[4px] text-emerald-400">
      MY TECHNICAL EXPERTISE
    </p>

    <h2 className="mt-3 text-4xl font-bold md:text-5xl">
      Skills & <span className="text-emerald-400">Technologies.</span>
    </h2>

    <p className="mt-5 max-w-2xl leading-8 text-gray-400">
      Technologies and tools I have been learning and working with
      throughout my computer science journey.
    </p>

    <div className="mt-12 grid gap-6 md:grid-cols-2">

      {/* PROGRAMMING LANGUAGES */}
      <div className="rounded-2xl border border-white/10 bg-[#0b1511] p-7 transition hover:border-emerald-400/50">
        <div className="mb-5 flex items-center gap-3">
          <span className="text-3xl">💻</span>
          <h3 className="text-xl font-bold">Programming Languages</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {["C Programming", "Python", "Java", "JavaScript"].map((skill) => (
            <span key={skill} className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* WEB DEVELOPMENT */}
      <div className="rounded-2xl border border-white/10 bg-[#0b1511] p-7 transition hover:border-emerald-400/50">
        <div className="mb-5 flex items-center gap-3">
          <span className="text-3xl">🌐</span>
          <h3 className="text-xl font-bold">Web Development</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {["HTML", "CSS", "React", "TypeScript"].map((skill) => (
            <span key={skill} className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* AI AND MACHINE LEARNING */}
      <div className="rounded-2xl border border-white/10 bg-[#0b1511] p-7 transition hover:border-emerald-400/50">
        <div className="mb-5 flex items-center gap-3">
          <span className="text-3xl">🤖</span>
          <h3 className="text-xl font-bold">AI & Machine Learning</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {["Machine Learning", "Scikit-learn", "Clustering", "Classification"].map((skill) => (
            <span key={skill} className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* DATABASE AND CORE CONCEPTS */}
      <div className="rounded-2xl border border-white/10 bg-[#0b1511] p-7 transition hover:border-emerald-400/50">
        <div className="mb-5 flex items-center gap-3">
          <span className="text-3xl">🗄️</span>
          <h3 className="text-xl font-bold">Database & Core Concepts</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {["DBMS", "SQL", "Data Structures", "Problem Solving"].map((skill) => (
            <span key={skill} className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

      
{/* PROJECTS SECTION */}
<section id="projects" className="relative overflow-hidden px-6 py-24">

  <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-emerald-500/5 blur-[100px]" />

  <div className="relative mx-auto max-w-6xl">

    <p className="text-sm font-semibold tracking-[4px] text-emerald-400">
      WHAT I'VE BUILT
    </p>

    <h2 className="mt-3 text-4xl font-bold md:text-5xl">
      Featured <span className="text-emerald-400">Projects.</span>
    </h2>

    <p className="mt-5 max-w-2xl leading-8 text-gray-400">
      A collection of projects where I explore technology,
      develop practical solutions and turn ideas into reality.
    </p>

    <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

      {projects.map((project, index) => (
        <div
          key={project.title}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1511] p-7 transition duration-300 hover:-translate-y-2 hover:border-emerald-400/60 hover:shadow-[0_0_35px_rgba(16,185,129,0.12)]"
        >

          {/* PROJECT ICON */}
          <div className="mb-7 flex items-center justify-between">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-3xl">
              {index === 0 ? "📚" : index === 1 ? "🤖" : "💡"}
            </div>

            <span className="text-sm font-medium text-emerald-400">
              0{index + 1}
            </span>

          </div>

          {/* PROJECT DETAILS */}
          <h3 className="text-xl font-bold transition group-hover:text-emerald-400">
            {project.title}
          </h3>

          <p className="mt-4 flex-grow text-sm leading-7 text-gray-400">
            {project.description}
          </p>

          {/* TECHNOLOGIES */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.split(" • ").map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs text-emerald-300"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* GITHUB LINK */}
          <div className="mt-8 border-t border-white/10 pt-5">

            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-emerald-400 transition hover:gap-4"
              >
                View on GitHub <span>↗</span>
              </a>
            ) : (
              <span className="text-sm text-gray-500">
                Project details coming soon
              </span>
            )}

          </div>

        </div>
      ))}

    </div>
  </div>
</section>


      
{/* EDUCATION SECTION */}
<section id="education" className="relative overflow-hidden bg-white/[0.02] px-6 py-24">

  <div className="mx-auto max-w-6xl">

    <p className="text-sm font-semibold tracking-[4px] text-emerald-400">
      MY ACADEMIC BACKGROUND
    </p>

    <h2 className="mt-3 text-4xl font-bold md:text-5xl">
      Education <span className="text-emerald-400">Journey.</span>
    </h2>

    <p className="mt-5 max-w-2xl leading-8 text-gray-400">
      My academic journey is helping me build a strong foundation
      in computer science, programming and technology.
    </p>

    <div className="relative mt-12 border-l-2 border-emerald-400/30 pl-8">

      <div className="absolute -left-[9px] top-8 h-4 w-4 rounded-full border-4 border-[#050908] bg-emerald-400" />

      <div className="rounded-2xl border border-white/10 bg-[#0b1511] p-7 transition duration-300 hover:border-emerald-400/50 md:p-10">

        <div className="flex flex-wrap items-center justify-between gap-4">

          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-400">
            UNDERGRADUATE
          </span>

          <span className="text-sm text-gray-500">
            Current Education
          </span>

        </div>

        <div className="mt-7 flex items-start gap-5">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-3xl">
            🎓
          </div>

          <div>
            <h3 className="text-xl font-bold md:text-2xl">
              Bachelor of Engineering
            </h3>

            <p className="mt-2 text-emerald-400">
              Computer Science & Engineering
            </p>

            <p className="mt-3 leading-7 text-gray-400">
              Undergraduate Student
            </p>
          </div>

        </div>

        <div className="mt-8 border-t border-white/10 pt-6">

          <p className="text-sm text-gray-400">
            Academic Performance
          </p>

          <p className="mt-2 text-3xl font-bold text-emerald-400">
            7.84 <span className="text-base font-normal text-gray-400">CGPA</span>
          </p>

        </div>

      </div>
    </div>

  </div>
</section>


      
{/* CONTACT SECTION */}
<section
  id="contact"
  className="relative overflow-hidden bg-[#050908] px-6 py-24 text-white"
>
  <div className="absolute -right-40 top-10 h-80 w-80 rounded-full bg-emerald-500/5 blur-[100px]" />

  <div className="relative mx-auto max-w-6xl">
    <p className="text-sm font-semibold tracking-[4px] text-emerald-400">
      GET IN TOUCH
    </p>

    <h2 className="mt-3 text-4xl font-bold md:text-5xl">
      Let's <span className="text-emerald-400">Connect.</span>
    </h2>

    <p className="mt-5 max-w-2xl leading-8 text-gray-400">
      Have an opportunity, a project idea, or just want to connect?
      I'd love to hear from you. Feel free to send me a message.
    </p>

    <div className="mt-12 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
      {/* Contact information */}
      <div className="space-y-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm text-gray-400">Email</p>
          <a
            href="mailto:prajhashreep.cs24@bitsathy.ac.in"
            className="mt-2 block break-all font-medium text-emerald-400 hover:text-emerald-300"
          >
            prajhashreep.cs24@bitsathy.ac.in
          </a>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm text-gray-400">Find me online</p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://github.com/Prajha-Shree"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 px-4 py-2 text-sm transition hover:border-emerald-400 hover:text-emerald-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/prajha-shree-p1512/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 px-4 py-2 text-sm transition hover:border-emerald-400 hover:text-emerald-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Contact form */}
      <form
        action="https://formsubmit.co/prajhashreep.cs24@bitsathy.ac.in"
        method="POST"
        className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
      >
        <input type="hidden" name="_subject" value="New Portfolio Message" />
        <input type="hidden" name="_template" value="table" />

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="w-full rounded-lg border border-white/10 bg-[#080f0c] px-4 py-3 text-white outline-none transition focus:border-emerald-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full rounded-lg border border-white/10 bg-[#080f0c] px-4 py-3 text-white outline-none transition focus:border-emerald-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            required
            placeholder="Enter the subject"
            className="w-full rounded-lg border border-white/10 bg-[#080f0c] px-4 py-3 text-white outline-none transition focus:border-emerald-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Write your message..."
            className="w-full resize-none rounded-lg border border-white/10 bg-[#080f0c] px-4 py-3 text-white outline-none transition focus:border-emerald-400"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:bg-emerald-300"
        >
          Send Message →
        </button>
      </form>
    </div>
  </div>
</section>

      
{/* FOOTER */}
<footer className="border-t border-white/10 bg-[#050908] px-6 py-8 text-white">
  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
    <div>
      <h3 className="text-xl font-bold">
        Prajha<span className="text-emerald-400">.</span>
      </h3>
      <p className="mt-2 text-sm text-gray-500">
        Building ideas into meaningful solutions.
      </p>
    </div>

    <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-400">
      <a href="#home" className="transition hover:text-emerald-400">Home</a>
      <a href="#about" className="transition hover:text-emerald-400">About</a>
      <a href="#skills" className="transition hover:text-emerald-400">Skills</a>
      <a href="#projects" className="transition hover:text-emerald-400">Projects</a>
      <a href="#contact" className="transition hover:text-emerald-400">Contact</a>
    </div>
  </div>

  <div className="mx-auto mt-7 max-w-6xl border-t border-white/10 pt-6 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Prajha Shree. All rights reserved.
  </div>
</footer>


    </div>
  );
}

export default App;
