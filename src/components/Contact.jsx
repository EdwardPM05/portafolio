const WHATSAPP = "https://wa.me/51907377938?text=" + encodeURIComponent("Hola Edward, vi tu portafolio y quiero conversar sobre un proyecto.");

// El formulario por correo (Formspree) se reemplazó por WhatsApp directo: es el canal que Edward
// realmente revisa. Ver PRODUCT.md / decisión del usuario.
export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-sheet">
        <div className="hero-kicker">Orden de trabajo — nuevo folio</div>
        <h2>¿Hablamos?</h2>
        <p>Disponible para nuevos proyectos y colaboraciones. Escríbeme directo por WhatsApp — es el canal que reviso al toque.</p>
        <a className="wsp-big" href={WHATSAPP} target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp"></i> Escríbeme por WhatsApp
        </a>
        <div className="contact-alt">
          o por <a href="https://www.linkedin.com/in/edward-miguel-pittman-medina-81b564274/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
