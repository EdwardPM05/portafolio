export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Hola, soy <span className="highlight">Edward Pittman</span>
          </h1>
          <h2>Ingeniero de Software</h2>
          <p>
            Desarrollador Full Stack. Construyo y mantengo sistemas que empresas reales usan hoy para
            operar — ERPs, apps móviles corporativas y automatizaciones — no solo ejercicios de portafolio.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-envelope"></i> Contáctame
            </a>
            <a href="CV/Edward Pittman - CV.pdf" download="Edward Pittman - CV.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary">
              <i className="fas fa-download"></i> Descargar CV
            </a>
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
            <img src="images/fot.png" alt="Edward Pittman" />
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
