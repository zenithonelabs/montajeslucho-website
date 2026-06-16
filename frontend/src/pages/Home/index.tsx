import { Link } from "react-router-dom";
import heroImg from "../../assets/images/hero.jpg";
import "./index.css";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Montaje profesional para tu hogar</h1>
          <p className="subtitle">
            Especialistas en montaje de muebles, instalación de lámparas, ventiladores y 
            cocinas.
          </p>

          <div className="hero-buttons">
            <Link to="/services" className="btn-primary">
              Ver servicios
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contáctame
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Montajes y transportes profesionales" />
        </div>
      </section>

      {/* BENEFICIOS PROFESIONALES */}
      <section className="beneficios">
        <h2>¿Por qué elegir Montajes Lucho?</h2>

        <div className="beneficios-grid">
          <div className="beneficio-card">
            <h3>✔ Profesionalidad garantizada</h3>
            <p>Trabajos limpios, precisos y con cuidado en cada detalle. Experiencia acreditada.</p>
          </div>

          <div className="beneficio-card">
            <h3>✔ Puntualidad y compromiso</h3>
            <p>Se respeta el horario pactado y se cumple con los tiempos estimados.</p>
          </div>

          <div className="beneficio-card">
            <h3>✔ Equipamiento adecuado</h3>
            <p>Herramientas profesionales y materiales de protección incluidos.</p>
          </div>

          <div className="beneficio-card">
            <h3>✔ Experto en montajes complejos</h3>
            <p>Montaje de cocinas, estructuras, muebles grandes, estanterías y lámparas.</p>
          </div>

          <div className="beneficio-card">
            <h3>✔ Solución de imprevistos</h3>
            <p>
              Capacidad para adaptarnos y resolver problemas en el momento.
            </p>
          </div>

          <div className="beneficio-card">
            <h3>✔ Valoraciones reales</h3>
            <p>Opiniones positivas de clientes satisfechos en TaskRabbit y consultas privadas.</p>
          </div>
        </div>
      </section>
    </>
  );
}