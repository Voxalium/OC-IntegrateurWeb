import { Arrow } from "../../components/Arrow/Arrow";
import { CardOs } from "../../components/Card/CardOs";
import { skills } from "../../datas/data.json";
export const Skills = () => {
    return (
        <section id="skills" className="skills">
            <Arrow link="#project" direction="up" />
            <h2>Mes compétences</h2>
            <h3>Systèmes d'exploitation</h3>
            <div className="system">
                {filterData("Softwares", "os").map((skill, idx) => (
                    <CardOs
                        key={`image ${skill.name}`}
                        title={skill.name}
                        content={skill.content}
                        image={skill.logo}
                    />
                ))}
            </div>

            <Arrow link="#intro" direction="down" />
        </section>
    );
};

const filterData = (title, category) => {
    return skills
        .find((f) => f.title === title)
        .skill.filter((s) => s.category === category);
};
