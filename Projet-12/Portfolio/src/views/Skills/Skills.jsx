import { Arrow } from "../../components/Arrow/Arrow";
import { CardOs } from "../../components/Card/CardOs";
import { Card } from "../../components/Card/Card";
import { skills } from "../../datas/data.json";
export const Skills = () => {
  return (
    <section id="skills" className="skills">
      <Arrow link="#project" direction="up" />
      <h2>Mes compétences</h2>

      <h3>Web</h3>
      <div className="cards">
        <Card skill={filterData("Code", "web")} />
      </div>

      <h3>Systèmes d'exploitation</h3>

      <div className="system">
        {filterData("Softwares", "os").map((skill) => (
          <CardOs
            key={`image ${skill.name}`}
            title={skill.name}
            content={skill.content}
            image={skill.logo}
          />
        ))}
      </div>

      <Arrow link="#intro" direction="home" />
    </section>
  );
};

const filterData = (title, category) => {
  return skills
    .find((f) => f.title === title)
    .skill.filter((s) => s.category === category);
};
