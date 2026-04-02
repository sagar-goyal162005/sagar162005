import { motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "AI Developer",
      "Backend Engineer",
      "Cybersecurity Enthusiast",
      "Open Source Contributor",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section className="hero" id="hero">
      <div className="hero-pre">// available for opportunities</div>
      <h1 className="hero-name">
        <span className="grd">Sagar</span>
        <br />
        Goyal
      </h1>
      <div className="hero-type">
        <span>{text}</span>
        <span className="cur-blink" />
      </div>
      <p className="hero-desc">
        Building intelligent systems at the intersection of AI and backend engineering.
        From real-time threat detection to voice automation — shipping code that matters.
      </p>
      <div className="hero-cta">
        <a href="#projects" className="btn-p">
          View My Work
        </a>
        <a href="#contact" className="btn-o">
          Let&apos;s Connect
        </a>
      </div>
      <div className="hero-media">
        <img
          className="hero-photo"
          src="/photo.jpeg"
          alt="Sagar Goyal"
          loading="eager"
        />
      </div>
      <div className="scroll-ind">
        <div className="scroll-line" />
        <span className="scroll-lbl">Scroll</span>
      </div>
      <div className="hero-links">
        <a
          href="https://github.com/sagar-goyal162005"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/sagar-goyal-202097324/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </section>
  );
}
