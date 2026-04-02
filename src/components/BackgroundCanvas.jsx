import { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let animationId;

    const pointCount = 92;
    const connectDistance = 190;
    const repelDistance = 190;
    const starCount = 220;
    let mouseX = -9999;
    let mouseY = -9999;

    const points = Array.from({ length: pointCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.4 + 0.4,
      a: Math.random() * 0.45 + 0.15,
    }));

    const stars = Array.from({ length: starCount }, () => ({
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
      z: Math.random(),
      size: Math.random() * 1.8 + 0.6,
      speed: Math.random() * 0.0004 + 0.00012,
    }));

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const onMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      // 3D starfield
      const cx = width / 2;
      const cy = height / 2;
      const parallaxX = (mouseX - cx) / cx;
      const parallaxY = (mouseY - cy) / cy;

      for (let i = 0; i < stars.length; i += 1) {
        stars[i].z -= stars[i].speed;
        if (stars[i].z <= 0.02) {
          stars[i].z = 1;
          stars[i].x = (Math.random() - 0.5) * 2;
          stars[i].y = (Math.random() - 0.5) * 2;
        }

        const depth = stars[i].z;
        const sx = cx + (stars[i].x + parallaxX * 0.08) * width * 0.6 / depth;
        const sy = cy + (stars[i].y + parallaxY * 0.08) * height * 0.6 / depth;
        const radius = stars[i].size * (1 - depth * 0.6);

        ctx.beginPath();
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,200,255,${0.65 + (1 - depth) * 0.7})`;
        ctx.fill();
      }

      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < connectDistance) {
            ctx.strokeStyle = `rgba(0,200,255,${(1 - dist / connectDistance) * 0.65})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }

        const dx = points[i].x - mouseX;
        const dy = points[i].y - mouseY;
        const d2 = dx * dx + dy * dy;
        if (d2 < repelDistance * repelDistance) {
          const d = Math.sqrt(d2) || 1;
          const f = ((repelDistance - d) / repelDistance) * 0.018;
          points[i].vx += (dx / d) * f;
          points[i].vy += (dy / d) * f;
        }

        points[i].vx *= 0.992;
        points[i].vy *= 0.992;
        points[i].x += points[i].vx;
        points[i].y += points[i].vy;

        if (points[i].x < 0 || points[i].x > width) points[i].vx *= -1;
        if (points[i].y < 0 || points[i].y > height) points[i].vy *= -1;

        ctx.beginPath();
        ctx.arc(points[i].x, points[i].y, points[i].r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,200,255,${points[i].a})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    animationId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <canvas id="bg-canvas" ref={canvasRef} />
      <div className="grid-bg" aria-hidden="true" />
    </>
  );
}
