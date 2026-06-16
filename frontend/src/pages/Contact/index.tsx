import { useState, type ChangeEvent, type FormEvent } from "react";
import "./index.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", mensaje: "" });
  const [status, setStatus] = useState<{
    sending: boolean
    ok: boolean | null
    error: string
  }>({
    sending: false,
    ok: null,
    error: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus({ sending: true, ok: null, error: "" });
  try {
    await emailjs.send("service_rfai16l","template_i0auidr",
      {
        nombre: form.nombre,
        telefono: form.telefono,
        email: form.email,
        mensaje: form.mensaje,
      },
      "_Gj6vADzzBZxDI3bO"
    );

    setStatus({ sending: false, ok: true, error: "" });
    setForm({ nombre: "", telefono: "", email: "", mensaje: "" });
  } catch (err) {
    console.error(err);
    setStatus({
      sending: false,
      ok: false,
      error: "No se pudo enviar. Inténtalo de nuevo.",
    });
  }
};

  const telHref = `tel:+${import.meta.env.VITE_PROVIDER_PHONE}`;
  const waHref = `https://wa.me/${import.meta.env.VITE_PROVIDER_PHONE}?text=${encodeURIComponent("Hola, te escribo desde la web de montajes. Me gustaría solicitar información.")}`;

  return (
    <article className="section contact-page">
      <header className="page-header">
        <h1>Contacto</h1>
        <p className="lead">Presupuesto rápido y sin compromiso.</p>
      </header>

      <div className="contact-grid">
        {/* Datos de contacto */}
        <aside className="contact-card">
          <h2>Datos directos</h2>
          <ul className="contact-list">
            <li><strong>Teléfono:</strong> <a href={telHref}>+{import.meta.env.VITE_PROVIDER_PHONE}</a></li>
            <li><strong>WhatsApp:</strong> <a href={waHref} target="_blank" rel="noopener noreferrer">Escríbeme</a></li>
            <li><strong>Email:</strong> <a href={`mailto:${import.meta.env.VITE_PROVIDER_EMAIL}`}>{import.meta.env.VITE_PROVIDER_EMAIL}</a></li>
            <li><strong>Zona:</strong> Madrid y alrededores</li>
            <li><strong>Horario:</strong> Lun–Vie 9:00–20:00 (Urgencias según disponibilidad)</li>
          </ul>

          <a className="button" href={waHref} target="_blank" rel="noopener noreferrer">
            Contáctame por WhatsApp
          </a>
        </aside>

        {/* Formulario */}
        <section className="contact-form">
          
          <form onSubmit={handleSubmit} className="card form">
            <h1>Envíame un mensaje:</h1>
            <br />
            <div className="form-row">
              <label htmlFor="nombre">Nombre</label>
              <input id="nombre" name="nombre" value={form.nombre} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <label htmlFor="telefono">Teléfono</label>
              <input id="telefono" name="telefono" value={form.telefono} onChange={handleChange} inputMode="tel" />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" value={form.email} onChange={handleChange} />
            </div>

            <div className="form-row">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows={5} value={form.mensaje} onChange={handleChange} />
            </div>

            <button className="button" disabled={status.sending}>
              {status.sending ? "Enviando..." : "Enviar"}
            </button>

            {status.ok && <p className="ok">¡Gracias! Te contactaremos pronto.</p>}
            {status.ok === false && <p className="error">{status.error}</p>}

            <small className="muted">Al enviar, aceptas nuestra política de privacidad.</small>
          </form>
        </section>
      </div>

      {/* SEO Local con JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Montajes y Transportes Lucho",
        "image": "/og-image.jpg",
        "areaServed": "Madrid",
        "telephone": '+${import.meta.env.VITE_PROVIDER_PHONE}',
        "url": "https://tudominio.com",
        "priceRange": "€€",
        "sameAs": [
          "https://wa.me/" + import.meta.env.VITE_PROVIDER_PHONE
        ]
      }) }} />
    </article>
  );
}

