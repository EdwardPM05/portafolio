import { projects } from "../data/projects.js";
import { ProjectCard } from "./ProjectCard.jsx";

export function Projects() {
  const produccion = projects.filter((p) => p.category === "produccion");
  const personal = projects.filter((p) => p.category === "personal");

  return (
    <section className="projects" id="projects">
      <div className="section-title">
        <h2>
          Proyectos <span className="highlight">Destacados</span>
        </h2>
      </div>

      <div className="projects-group">
        <div className="projects-group-title">
          <h3>En Producción</h3>
          <p>Sistemas que empresas reales usan hoy para operar — no ejercicios de práctica.</p>
        </div>
        <div className="projects-grid projects-grid--featured">
          {produccion.map((p) => (
            <ProjectCard project={p} featured key={p.title} />
          ))}
        </div>
      </div>

      <div className="projects-group">
        <div className="projects-group-title">
          <h3>Proyectos Personales y Freelance</h3>
          <p>Herramientas propias, extensiones y proyectos por encargo.</p>
        </div>
        <div className="projects-grid">
          {personal.map((p) => (
            <ProjectCard project={p} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
