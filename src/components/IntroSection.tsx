import { master } from "../data";

export default function IntroSection() {
  return (
    <>
      <section
        className="centered"
        style={{ marginBottom: "30px", fontFamily: "Arial" }}
      >
        <h1 style={{ color: "#201712", fontSize: "65px" }}> {master.name}</h1>
        <p style={{ color: "#b87e9d", fontSize: "40px" }}>{master.role} </p>
        <p style={{ color: "#666", marginTop: "10px" }}>{master.slogan} </p>
      </section>
      <div className="master-info">
        <span>🌟{master.experience}</span>
        <span>❤️{master.clients}</span>
        <span>📍{master.city}</span>
      </div>
    </>
  );
}
