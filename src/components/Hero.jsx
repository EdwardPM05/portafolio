const WHATSAPP = "https://wa.me/51907377938?text=" + encodeURIComponent("Hola Edward, vi tu portafolio y quiero conversar sobre un proyecto.");

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-sheet">
            <div className="hero-head">
              <div>
                <div className="hero-kicker">Orden de trabajo — ficha técnica</div>
                <h1>Edward Pittman</h1>
                <h2>Ingeniero de Software · Full Stack</h2>
              </div>
              <div className="stamp">
                COMPLETADO
                <br />Y VERIFICADO
              </div>
            </div>
            <p>
              Desarrollador Full Stack. Me dedico a construir software a medida para empresas —desde ERPs
              hasta automatizaciones— y me apasiona especialmente el desarrollo móvil.
            </p>
            <div className="hero-buttons">
              <a href="CV/Edward Pittman - CV.pdf" download="Edward Pittman - CV.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
                <i className="fas fa-download"></i> Descargar CV
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <i className="fab fa-whatsapp"></i> Escríbeme por WhatsApp
              </a>
            </div>
          </div>
          <div className="social-links social-links-mobile">
            <a href="https://www.linkedin.com/in/edward-miguel-pittman-medina-81b564274/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/EdwardPM05" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src="images/foto-perfil.png" alt="Edward Pittman" />
          </div>
        </div>
      </div>
      <div className="social-links social-links-desktop">
        <a href="https://www.linkedin.com/in/edward-miguel-pittman-medina-81b564274/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/EdwardPM05" target="_blank" rel="noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>
  );
}
