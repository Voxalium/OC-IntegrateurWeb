import { Skill } from "../Skill/Skill";
import datas from "../../datas/projects.json";
import { useState } from "react";
import { useEffect } from "react";

export const Project = () => {
    const data = [
        datas.booki,
        datas.ohmyfood,
        datas.sophiebuel,
        datas.menumaker,
    ];

    const [index, setIndex] = useState(0);
    const nextProject = () => {
        setTimeout(
            () => setIndex(index + 1 < data.length ? index + 1 : 0),
            10000
        );
    };
    useEffect(() => {
        nextProject();
    });

    return (
        <div className="project">
            <h2>Mes projets</h2>
            <div className="project-desc">
                <h3>{data[index].title}</h3>
                <div className="container">
                    <img src={data[index].img} alt="" />
                    <p>
                        {data[index].description}{" "}
                        {data[index].link ? (
                            <a target="_blank" href={data[index].link}>
                                Lien Github
                            </a>
                        ) : null}
                    </p>
                </div>
                <div className="skills">
                    {data[index].skills.map((skill, idx) => (
                        <Skill key={idx} name={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
};
