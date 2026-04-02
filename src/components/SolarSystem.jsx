import { useMemo } from "react";
import Planet from "./Planet";
import Rocket from "./Rocket";

export default function SolarSystem({ projects, selectedId, onSelect }) {
  const center = useMemo(() => ({ x: 0, y: 0 }), []);

  const target = useMemo(() => {
    const active = projects.find((project) => project.id === selectedId) ?? projects[0];
    const angle = (active.angle * Math.PI) / 180;
    return {
      x: Math.cos(angle) * active.radius,
      y: Math.sin(angle) * active.radius,
      rotate: active.angle + 90,
    };
  }, [projects, selectedId]);

  return (
    <section className="space-wrapper" id="space">
      <div className="space-system">
        <div className="sun">
          <span>Sagar</span>
        </div>

        {projects.map((project) => (
          <div
            key={project.id}
            className="orbit"
            style={{
              width: project.radius * 2,
              height: project.radius * 2,
              animationDuration: `${project.duration}s`,
              transform: `rotate(${project.angle}deg)`,
            }}
          >
            <div className="orbit-node">
              <Planet
                label={project.title}
                size={project.size}
                onClick={() => onSelect(project.id)}
              />
            </div>
          </div>
        ))}

        <Rocket target={{ x: center.x + target.x, y: center.y + target.y, rotate: target.rotate }} />
      </div>
    </section>
  );
}
