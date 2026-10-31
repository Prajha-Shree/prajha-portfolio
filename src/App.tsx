
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
]

function App() {
  return (
    <div className="min-h-screen bg-[#050908] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050908]/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="#" className="text-3xl font-bold text-emerald-400">
            PS<span className="text-white">.</span>
          </a>

          <div className="hidden gap-8 text-sm text-gray-300 md:flex">
            <a href="#home" className="hover:text-emerald-400">Home</a>
            <a href="#about" className="hover:text-emerald-400">About</a>
            <a href="#skills" className="hover:text-emerald-400">Skills</a>
            <a href="#projects" className="hover:text-emerald-400">Projects</a>
            <a href="#education" className="hover:text-emerald-400">Education</a>
            <a href="#contact" className="hover:text-emerald-400">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-emerald-400 px-5 py-2 text-sm text-emerald-400 hover:bg-emerald-400 hover:text-black"
          >
            Let's Talk
          </a>
        </div>
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

            <h2 className="mt-5 text-2xl font-semibold text-gray-300">
              <span className="typing-text">
                Aspiring Software Developer
              </span>
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
      <section id="about" className="px-6 py-24">

        <div className="mx-auto max-w-5xl">

          <p className="text-sm tracking-widest text-emerald-400">
            GET TO KNOW ME
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            About <span className="text-emerald-400">Me.</span>
          </h2>

          <p className="mt-7 max-w-3xl leading-8 text-gray-400">
            I am a passionate computer science student interested in
            software development, Artificial Intelligence and Machine
            Learning. I love learning new technologies, participating
            in technical challenges and turning ideas into working projects.
            My goal is to become a skilled software developer and
            continuously grow through real-world experiences.
          </p>

        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="bg-white/[0.02] px-6 py-24">

        <div className="mx-auto max-w-5xl">

          <p className="text-sm tracking-widest text-emerald-400">
            WHAT I WORK WITH
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            My <span className="text-emerald-400">Skills.</span>
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

            {[
              "C Programming",
              "Python",
              "Java",
              "HTML & CSS",
              "JavaScript",
              "React",
              "Machine Learning",
              "DBMS",
            ].map((skill) => (

              <div
                key={skill}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center transition hover:border-emerald-400 hover:text-emerald-400"
              >
                {skill}
              </div>

            ))}

          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="px-6 py-24">

        <div className="mx-auto max-w-5xl">

          <p className="text-sm tracking-widest text-emerald-400">
            MY RECENT WORK
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Featured <span className="text-emerald-400">Projects.</span>
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]"
              >

                <div className="mb-5 text-3xl text-emerald-400">
                  ✦
                </div>

                <h3 className="text-xl font-bold transition group-hover:text-emerald-400">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <p className="mt-6 text-xs leading-6 text-emerald-400">
                  {project.tech}
                </p>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-full border border-emerald-400 px-5 py-2 text-sm font-semibold text-emerald-400 transition hover:bg-emerald-400 hover:text-black"
                  >
                    View Project ↗
                  </a>
                )}

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="bg-white/[0.02] px-6 py-24">

        <div className="mx-auto max-w-5xl">

          <p className="text-sm tracking-widest text-emerald-400">
            MY JOURNEY
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Education.
          </h2>

          <div className="mt-8 rounded-2xl border border-white/10 p-8">

            <h3 className="text-xl font-bold">
              Computer Science & Engineering
            </h3>

            <p className="mt-3 text-gray-400">
              Undergraduate Student
            </p>

            <p className="mt-3 text-emerald-400">
              CGPA: 7.84
            </p>

          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="px-6 py-24 text-center">

        <p className="text-sm tracking-widest text-emerald-400">
          GET IN TOUCH
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Let's Build Something{" "}
          <span className="text-emerald-400">Great.</span>
        </h2>

        <p className="mt-5 text-gray-400">
          Open to learning, collaboration and exciting opportunities.
        </p>

        <a
          href="https://www.linkedin.com/in/prajha-shree-p1512/"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full bg-emerald-400 px-8 py-3 font-semibold text-black hover:bg-emerald-300"
        >
          Connect With Me →
        </a>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Prajha Shree. Designed with passion 💚
      </footer>

    </div>
  )
}

export default App
