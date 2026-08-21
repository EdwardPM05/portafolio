import { useRef, useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/xdaozdaj";

function validate(data) {
  const errors = {};
  if (!data.get("nombre")?.trim()) errors.nombre = "Ingresa tu nombre completo.";
  const email = data.get("email")?.trim() || "";
  if (!email) errors.email = "Ingresa tu email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Ese email no parece válido.";
  if (!data.get("mensaje")?.trim()) errors.mensaje = "Escribe tu mensaje.";
  return errors;
}

export function Contact() {
  const formRef = useRef(null);
  // status: idle | sending | success | error
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return; // evita doble envío

    const form = formRef.current;
    const data = new FormData(form);

    const errors = validate(data);
    setFieldErrors(errors);
    if (Object.keys(errors).length) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      const payload = await res.json().catch(() => null);
      const message =
        payload?.errors?.map((err) => err.message).join(" ") ||
        "No se pudo enviar el mensaje. Intenta de nuevo en unos minutos.";
      setErrorMsg(message);
      setStatus("error");
    } catch {
      setErrorMsg("No hay conexión a internet, o el servidor no respondió. Intenta de nuevo.");
      setStatus("error");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="section-title">
        <h2>¡Hablemos!</h2>
        <p>Estoy disponible para nuevos proyectos y colaboraciones</p>
      </div>
      <div className="contact-container">
        {status === "success" ? (
          <div className="form-success" role="status">
            <i className="fas fa-circle-check"></i>
            <div>
              <strong>¡Mensaje enviado!</strong>
              <p>Gracias por escribirme, te responderé a la brevedad.</p>
            </div>
            <button type="button" className="btn btn-secondary" onClick={() => setStatus("idle")}>
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Nombre Completo</label>
              <input type="text" id="name" name="nombre" disabled={status === "sending"} aria-invalid={!!fieldErrors.nombre} />
              {fieldErrors.nombre ? <span className="field-error">{fieldErrors.nombre}</span> : null}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" disabled={status === "sending"} aria-invalid={!!fieldErrors.email} />
              {fieldErrors.email ? <span className="field-error">{fieldErrors.email}</span> : null}
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="mensaje" disabled={status === "sending"} aria-invalid={!!fieldErrors.mensaje}></textarea>
              {fieldErrors.mensaje ? <span className="field-error">{fieldErrors.mensaje}</span> : null}
            </div>

            {status === "error" ? (
              <div className="form-error" role="alert">
                <i className="fas fa-triangle-exclamation"></i> {errorMsg}
              </div>
            ) : null}

            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? (
                <>
                  <i className="fas fa-circle-notch fa-spin"></i> Enviando...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i> Enviar Mensaje
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
