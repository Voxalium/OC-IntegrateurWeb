import { Tag } from "../../components/Tag/Tag";

import { useState } from "react";

export const Slider = ({ data }) => {
    const [index, setIndex] = useState(0);
    const nextProject = (i) => {
        setIndex((index + i + data.length) % data.length);
    };
    return (
        <div className="slider">
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
    );
};
