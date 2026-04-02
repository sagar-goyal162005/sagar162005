export default function About() {
  return (
    <section id="about" className="about">
      <div className="reveal">
        <p className="section-tag">// 001 — about</p>
        <h2 className="section-title">
          Crafting <span className="accent">Intelligence</span>
          <br />
          from First Principles
        </h2>
      </div>
      <div className="about-grid">
        <div className="about-text reveal">
          <p>
            I’m an <strong>AI-focused developer and backend engineer</strong> passionate about
            building scalable, secure, and real-world applications — combining intelligent
            systems with efficient backend architectures to solve meaningful problems.
          </p>
          <p>
            My work spans <strong>computer vision, voice AI, full-stack development,</strong> and
            cybersecurity. I approach every project with clean code, performance-driven
            design, and a drive to push what software can do.
          </p>
          <p>
            Currently exploring <strong>system design, cloud technologies,</strong> and secure
            application development — aiming to build impactful software at scale with a
            focus on correctness and craft.
          </p>
        </div>
        <div className="stats-grid reveal">
          <div className="stat-box">
            <div className="stat-n" data-target="4">0+</div>
            <div className="stat-l">Major Projects</div>
          </div>
          <div className="stat-box">
            <div className="stat-n" data-target="4">0+</div>
            <div className="stat-l">Languages</div>
          </div>
          <div className="stat-box">
            <div className="stat-n" data-target="10">0+</div>
            <div className="stat-l">Technologies</div>
          </div>
          <div className="stat-box">
            <div className="stat-n" data-target="3">0+</div>
            <div className="stat-l">CTF Challenges</div>
          </div>
        </div>
      </div>
    </section>
  );
}
