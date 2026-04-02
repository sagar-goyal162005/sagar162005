import { motion } from "framer-motion";

const projects = [
  {
    title: "Swasth AI",
    desc: "AI-powered health assistant. [Live Demo]",
    github: "https://github.com/sagar-goyal162005/AI-Rockfall-Prediction-system.git",
    demo: "https://swasth-ai-ten.vercel.app",
  },
  {
    title: "ChainSense AI",
    desc: "Autonomous Web3 expense management. [Live Demo]",
    github: "https://github.com/sagar-goyal162005/intent-watch.git",
    demo: "https://chainsense-ai-autonomous-web3-expense-mepp.onrender.com/",
  },
  {
    title: "IP Port Scanner",
    desc: "Nmap-based IP/Port scanner.",
    github: "https://github.com/sagar-goyal162005/IP-Address-Port-Scanner-Using-Nmap-.git",
    demo: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold tracking-tight">Projects</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/60">
          A few things I’ve built recently — click the links for code and demos.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
            whileHover={{ y: -6, rotateX: 6, rotateY: -6, scale: 1.02 }}
            style={{ transformStyle: "preserve-3d" }}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/30 transition"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100" style={{
              background:
                "radial-gradient(900px circle at 10% 0%, rgba(168, 85, 247, 0.18), transparent 40%), radial-gradient(700px circle at 90% 40%, rgba(236, 72, 153, 0.12), transparent 45%)",
            }} />

            <div className="relative">
              <div className="mb-4 h-10 w-10 rounded-xl bg-purple-600/20 ring-1 ring-purple-400/30" />
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/65">{p.desc}</p>
            </div>

            <div className="relative mt-6 flex gap-4">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-purple-300 hover:text-purple-200"
                >
                  GitHub
                </a>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-emerald-300 hover:text-emerald-200"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
