import { useState } from "react";

const LINK_ICON = {
  npm: "fab fa-npm",
  github: "fab fa-github",
  external: "fas fa-external-link-alt",
};

export function ProjectCard({ project, featured = false }) {
  const [slide, setSlide] = useState(0);
  const [loaded, setLoaded] = useState(() => new Set([0]));
  const count = project.images.length;

  const goTo = (i) => {
    setSlide(i);
    setLoaded((prev) => (prev.has(i) ? prev : new Set(prev).add(i)));
  };

  const prev = (e) => {
    e.stopPropagation();
    goTo(slide > 0 ? slide - 1 : count - 1);
  };
  const next = (e) => {
    e.stopPropagation();
    goTo(slide < count - 1 ? slide + 1 : 0);
  };

  return (
    <div className={"project-card" + (featured ? " project-card--featured" : "")}>
      <div className="card-carousel">
        {project.images.map((img, i) => (
          <div
            className={"carousel-slide" + (project.mobileView ? " mobile-view" : "") + (i === slide ? " active" : "")}
            key={img.src}
          >
            {loaded.has(i) ? <img src={img.src} alt={img.alt} loading="lazy" /> : null}
          </div>
        ))}
        <button className="carousel-btn prev" onClick={prev} aria-label="Imagen anterior">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="carousel-btn next" onClick={next} aria-label="Imagen siguiente">
          <i className="fas fa-chevron-right"></i>
        </button>
        <div className="carousel-indicators">
          {project.images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className={"indicator" + (i === slide ? " active" : "")}
              aria-label={`Ir a imagen ${i + 1} de ${count}`}
              aria-current={i === slide}
              onClick={(e) => {
                e.stopPropagation();
                goTo(i);
              }}
            />
          ))}
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span className="tech-badge" key={t}>
              {t}
            </span>
          ))}
        </div>
        {project.links.length ? (
          <div className="project-links">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={link.variant === "demo" ? "link-demo" : "link-code"}
              >
                <i className={LINK_ICON[link.icon]}></i> {link.label}
              </a>
            ))}
          </div>
        ) : project.privateNote ? (
          <p className="project-private-note">{project.privateNote}</p>
        ) : null}
      </div>
    </div>
  );
}
