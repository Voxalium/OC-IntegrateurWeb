import { projects } from "../../datas/data.json";
import { Arrow } from "../../components/Arrow/Arrow";
import { Grid } from "../../components/Grid/Grid";
import { Slider } from "../../components/Slider/Slider";

export const Project = () => {
    return (
        <div id="project" className="project">
            <Arrow link="#intro" direction="up" />
            <h2>Mes projets</h2>
            <Slider data={projects} />
            <Arrow link="#skills" direction="down" />
        </div>
    );
};
