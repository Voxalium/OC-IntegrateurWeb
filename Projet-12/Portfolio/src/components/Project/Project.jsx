import { Tag } from "../Tag/Tag";
import { useState } from "react";
import { useEffect } from "react";
import { projects } from "../../datas/data.json";
export const Project = () => {
    const data = projects;

    const [index, setIndex] = useState(0);
    const nextProject = (i) => {
        setIndex((index + i + data.length) % data.length);
    };

    return (
        <div className="project">
            <h2>Mes projets</h2>
            <div className="project-desc">
                <h3>{data[index].title}</h3>
                <div className="container">
                    <div
                        onClick={() => nextProject(-1)}
                        className="nav-button prev"
                    ></div>
                    <img src={data[index].img} alt={data[index].title} />
                    <p>
                        {data[index].description}{" "}
                        {data[index].link ? (
                            <a target="_blank" href={data[index].link}>
                                Lien Github
                            </a>
                        ) : null}
                    </p>

                    <div
                        onClick={() => nextProject(+1)}
                        className="nav-button next"
                    ></div>
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
