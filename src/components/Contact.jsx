export default function Contact() {
  const email = "sg0169690@gmail.com";
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="reveal">
          <p className="section-tag">// 004 — contact</p>
          <h2 className="section-title">
            Let&apos;s <span className="accent">Build</span>
            <br />
            Something Together
          </h2>
        </div>
        <p className="contact-sub reveal">
          Open to collaborations, internships, and exciting projects. Whether it&apos;s an AI
          system, backend architecture, or something new — I&apos;m all ears.
        </p>
        <div className="c-links reveal">
          <a
            href="https://github.com/sagar-goyal162005"
            target="_blank"
            rel="noreferrer"
            className="c-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sagar-goyal-202097324/"
            target="_blank"
            rel="noreferrer"
            className="c-link"
          >
            LinkedIn
          </a>
          <a href={`mailto:${email}`} className="c-link">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}