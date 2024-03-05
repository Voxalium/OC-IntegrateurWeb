import { projects } from "../../datas/data.json";
import { Arrow } from "../../components/Arrow/Arrow";
import { Slider } from "../../components/Slider/Slider";

export const Project = () => {
    return (
        <section id="project" className="project">
            <Arrow link="#intro" direction="up" />
            <h2>Mes projets</h2>
            <Slider data={projects} />
            <Arrow link="#skills" direction="down" />
        </section>
    );
};
