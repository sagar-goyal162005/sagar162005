import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cur");
    const ring = document.getElementById("cur-ring");
    if (!cursor || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;

    const onMove = (event) => {
      mx = event.clientX;
      my = event.clientY;
      cursor.style.left = `${mx - 5}px`;
      cursor.style.top = `${my - 5}px`;
    };

    const animate = () => {
      rx += (mx - rx - 18) * 0.12;
      ry += (my - ry - 18) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      requestAnimationFrame(animate);
    };

    const addHover = () => {
      cursor.style.transform = "scale(2.2)";
      ring.style.transform = "scale(1.6)";
      ring.style.borderColor = "rgba(0,200,255,0.9)";
    };

    const removeHover = () => {
      cursor.style.transform = "scale(1)";
      ring.style.transform = "scale(1)";
      ring.style.borderColor = "rgba(0,200,255,0.45)";
    };

    const hoverTargets = document.querySelectorAll("a,button,.p-card,.skill-chip");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    window.addEventListener("mousemove", onMove, { passive: true });
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      <div id="cur" />
      <div id="cur-ring" />
    </>
  );
}
