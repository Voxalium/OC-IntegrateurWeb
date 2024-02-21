import { Tag } from "../Tag/Tag";
import { useState } from "react";
import { useEffect } from "react";
import { projects } from "../../datas/data.json";
export const Project = () => {
    const data = projects;

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
                <div className="tags">
                    {data[index].skills.map((skill, idx) => (
                        <Tag key={idx} name={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
};
