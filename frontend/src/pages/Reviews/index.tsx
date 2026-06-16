import "./index.css"; 

export default function Reviews() {
  const reseñas = [
    {
      img: "/img/reseña1.webp.jpeg",
      texto: "Rápido, profesional y muy cuidadoso.",
      autor: "Ana G."
    },
    {
      img: "/img/reseña2.webp.jpeg",
      texto: "Montó el armario de mi habitación con precisión y dejó todo limpio.",
      autor: "Jorge R."
    },
    {
      img: "/img/reseña3.webp.jpeg",
      texto: "100% recomendable. Serio y puntual.",
      autor: "Ruben Garcia"
    }
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Opiniones de Clientes
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px"
        }}
      >
        {reseñas.map((r, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}
          >
            <img
              src={r.img}
              alt="reseña"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "15px"
              }}
            />
            <p>"{r.texto}"</p>
            <p style={{ fontWeight: "bold", marginTop: "8px" }}>— {r.autor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
