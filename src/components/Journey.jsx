const journey = [
  {
    badge: "Networking",
    title: "IP Address Port Scanner",
    desc: "Nmap-based IP/Port scanning tool for fast network reconnaissance.",
    tech: ["Python", "Nmap", "Networking"],
    link: "https://github.com/sagar-goyal162005/IP-Address-Port-Scanner-Using-Nmap-.git",
  },
  {
    badge: "AI + Safety",
    title: "AI Rockfall Prediction System",
    desc: "Predictive AI system to forecast rockfall risks with data-driven modeling and analysis.",
    tech: ["Python", "ML", "Data Analysis"],
    link: "https://github.com/sagar-goyal162005/AI-Rockfall-Prediction-system.git",
  },
  {
    badge: "AI + Health",
    title: "Swasth AI",
    desc: "AI-powered health assistant built for smarter, guided wellness support.",
    tech: ["React", "AI", "Healthcare"],
    link: "https://swasth-ai-ten.vercel.app",
  },
  {
    badge: "Web3 + AI",
    title: "ChainSense AI",
    desc: "Autonomous Web3 expense management assistant with smart analysis workflows.",
    tech: ["Web3", "AI", "Automation"],
    link: "https://chainsense-ai-autonomous-web3-expense-mepp.onrender.com/",
  },
  {
    badge: "Cybersecurity",
    title: "Intent Watch",
    desc: "Security-focused project exploring intent monitoring and suspicious behavior analysis.",
    tech: ["Python", "Security", "Automation"],
    link: "https://github.com/sagar-goyal162005/intent-watch.git",
  },
];

export default function Journey() {
  return (
    <section id="projects" className="projects">
      <div className="reveal">
        <p className="section-tag">// 003 — journey</p>
        <h2 className="section-title">
          Selected <span className="accent">Work</span>
        </h2>
      </div>
      <div className="journey">
        {journey.map((item, index) => (
          <div className="journey-item reveal" key={item.title}>
            <div className="journey-node">
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="journey-card p-card">
              <span className="p-badge">{item.badge}</span>
              <h3 className="p-title">{item.title}</h3>
              <p className="p-desc">{item.desc}</p>
              <div className="p-tech">
                {item.tech.map((tech) => (
                  <span className="p-t" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <a className="p-link" href={item.link} target="_blank" rel="noreferrer">
                View Project <span className="arr">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
