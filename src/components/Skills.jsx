import { skills } from "../data/skills.js";

export function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-title">
        <h1>
          Mis <span className="highlight">Habilidades</span>
        </h1>
      </div>

      <div className="cards_container--habilidades">
        {skills.map((s) => (
          <div className="cards--habilidades" key={s.name}>
            <img src={s.src} alt={s.name} className={s.className} />
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
