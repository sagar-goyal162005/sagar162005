const skills = {
  Languages: ["Python", "C++", "Java", "JavaScript"],
  "Frontend & UI": ["React", "Tailwind CSS", "Streamlit", "HTML / CSS"],
  "AI / ML": ["YOLOv8", "OpenCV", "NumPy", "Pandas", "MediaPipe", "NLP"],
  "Security & Tooling": ["CTF", "Cryptography", "Network Scanning", "Git", "Linux"],
};

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="reveal">
        <p className="section-tag">// 002 — skills</p>
        <h2 className="section-title">
          Tech <span className="accent">Arsenal</span>
        </h2>
      </div>
      <div className="skills-inner">
        {Object.entries(skills).map(([group, items]) => (
          <div className="skill-group reveal" key={group}>
            <div className="skill-group-label">{group}</div>
            <div className="skills-row">
              {items.map((item) => (
                <div className="skill-chip" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
