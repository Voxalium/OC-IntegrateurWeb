import { Card } from "./Card";
import { skills } from "../../datas//data.json";
import { Arrow } from "../Arrow/Arrow";

export const Skills = () => {
    const data = skills;
    return (
        <div id="skills" className="skills">
            <Arrow link="#project" direction="up" />
            <h2>Mes compétences</h2>
            <div className="skills-container">
                {data.map((d, idx) => (
                    <Card key={`${idx}-card`} title={d.title} skill={d.skill} />
                ))}
            </div>
            <Arrow link="#intro" direction="top" />
        </div>
    );
};
