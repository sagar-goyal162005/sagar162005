import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundCanvas from "./components/BackgroundCanvas";
import Cursor from "./components/Cursor";

export default function App() {
  const [mode, setMode] = useState(null);
  const [isLaunching, setIsLaunching] = useState(false);
  useEffect(() => {
    if (mode !== "space") return undefined;
    if (!isLaunching) return undefined;
    const timer = window.setTimeout(() => setIsLaunching(false), 1400);
    return () => window.clearTimeout(timer);
  }, [mode, isLaunching]);

  useEffect(() => {
    if (mode !== "simple") return undefined;

    const revealEls = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("in"), idx * 75);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    const counterEls = document.querySelectorAll("[data-target]");
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = Number(entry.target.getAttribute("data-target")) || 0;
          let current = 0;
          const step = () => {
            current = Math.min(current + 1, target);
            entry.target.textContent = `${current}+`;
            if (current < target) requestAnimationFrame(step);
          };
          step();
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.6 }
    );
    counterEls.forEach((el) => counterObserver.observe(el));

    const cards = document.querySelectorAll(".p-card");
    const onCardMove = (card) => (event) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const rx = ((event.clientY - cy) / rect.height) * -10;
      const ry = ((event.clientX - cx) / rect.width) * 10;
      card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(10px)`;
      card.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
      card.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
    };
    const onCardLeave = (card) => () => {
      card.style.transform = "";
    };

    cards.forEach((card) => {
      const move = onCardMove(card);
      const leave = onCardLeave(card);
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      card.__move = move;
      card.__leave = leave;
    });

    const nav = document.getElementById("nav");
    const onScroll = () => {
      if (!nav) return;
      nav.classList.toggle("nav-solid", window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
      cards.forEach((card) => {
        if (card.__move) card.removeEventListener("mousemove", card.__move);
        if (card.__leave) card.removeEventListener("mouseleave", card.__leave);
      });
      window.removeEventListener("scroll", onScroll);
    };
  }, [mode]);

  const enterMode = (nextMode) => {
    setMode(nextMode);
    if (nextMode === "space") {
      setIsLaunching(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {mode !== "space" && <Cursor />}
      {mode !== "space" && <BackgroundCanvas />}
      {mode === null && (
        <div className="mode-gate">
          <div className="gate-card">
            <p className="gate-sub">Choose your view</p>
            <h1 className="gate-title">Sagar Goyal</h1>
            <p className="gate-desc">
              Recruiter-friendly view or immersive space journey — pick your mode.
            </p>
            <div className="gate-actions">
              <button type="button" className="gate-btn" onClick={() => enterMode("simple")}>
                Simple Mode 📄
              </button>
              <button
                type="button"
                className="gate-btn gate-btn--alt"
                onClick={() => enterMode("space")}
              >
                Space Mode 🚀
              </button>
            </div>
          </div>
        </div>
      )}

      {isLaunching && (
        <div className="launch-overlay" aria-hidden="true">
          <div className="rocket-blast" />
        </div>
      )}

      {mode === "simple" && (
        <>
          <Navbar />
          <main className="pt-20">
            <Hero />
            <About />
            <Skills />
            <Journey />
            <Contact />
          </main>
          <Footer />
        </>
      )}

      {mode === "space" && (
        <main className="space-mode">
          <button type="button" className="space-back" onClick={() => enterMode("simple")}
          >
            Back to Simple Mode 📄
          </button>
          <iframe title="Space Portfolio" className="space-iframe" src="/space.html" />
        </main>
      )}
    </div>
  );
}
