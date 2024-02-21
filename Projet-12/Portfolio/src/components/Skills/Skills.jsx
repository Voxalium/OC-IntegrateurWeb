import { Card } from "./Card";
import { skills } from "../../datas//data.json";

export const Skills = () => {
    const data = skills;
    return (
        <div className="skills">
            <h2>Mes compétences</h2>
            {data.map((d, idx) => (
                <Card key={`${idx}-card`} title={d.title} skill={d.skill} />
            ))}
        </div>
    );
};
