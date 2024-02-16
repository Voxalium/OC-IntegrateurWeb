import { Skill } from "../Skill/Skill";
import { booki } from "../../datas/projects.json";

export const Project = () => {
    return (
        <div className="project">
            <h2>Mes projets</h2>
            <div className="project-desc">
                <h3>{booki.title}</h3>
                <div className="container">
                    <img src={booki.img} alt="" />
                    <p>{booki.description}</p>
                </div>
                <div className="skills">
                    {booki.skills.map((skill, idx) => (
                        <Skill key={idx} name={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
};
