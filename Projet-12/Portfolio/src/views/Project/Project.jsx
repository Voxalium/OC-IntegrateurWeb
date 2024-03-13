import { projects } from "../../datas/data.json";
import { Arrow } from "../../components/Arrow/Arrow";
import { CardFlip } from "../../components/Card/CardFlip";
export const Project = () => {
  return (
    <section id="project" className="project">
      <Arrow link="#intro" direction="up" />
      <h2>Mes projets</h2>
      <div className="grid-card">
        {projects.map((p, idx) => (
          <CardFlip
            key={`carte ${idx}`}
            title={p.title}
            cover={p.img}
            link={p.link}
            content={p.description}
            tag={p.skills}
          />
        ))}
      </div>

      <Arrow link="#skills" direction="down" />
    </section>
  );
};
