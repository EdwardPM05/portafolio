import { projects } from "../data/projects.js";
import { ProjectCard } from "./ProjectCard.jsx";

export function Projects() {
  const produccion = projects.filter((p) => p.category === "produccion");
  const personal = projects.filter((p) => p.category === "personal");

  return (
    <section className="projects" id="projects">
      <div className="section-title">
        <h2>Proyectos</h2>
        <p>{projects.length} folios en el catálogo</p>
      </div>

      <div className="projects-group">
        <div className="projects-group-title">
          <h3>En Producción</h3>
          <p>Sistemas que empresas reales usan hoy para operar</p>
        </div>
        <div className="projects-grid projects-grid--featured">
          {produccion.map((p, i) => (
            <ProjectCard project={p} featured folio={i + 1} total={projects.length} key={p.title} />
          ))}
        </div>
      </div>

      <div className="projects-group">
        <div className="projects-group-title">
          <h3>Proyectos Personales y Freelance</h3>
          <p>Herramientas propias e iniciativa personal</p>
        </div>
        <div className="projects-grid">
          {personal.map((p, i) => (
            <ProjectCard project={p} folio={produccion.length + i + 1} total={projects.length} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
