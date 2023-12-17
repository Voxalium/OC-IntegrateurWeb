import Dropdown from "../../components/Dropdown";
import Slideshow from "../../components/Slideshow";
import Info from "../../components/Info";
import Tag from "../../components/Tag";
import { useLoaderData } from "react-router-dom";

function Logements() {
    const data = useLoaderData();
    return (
        <div className="logements">
            <Slideshow />

            <Info title={data.title} location={data.location} />
            <section className="logements-tags">
                {data.tags.map((tag) => (
                    <Tag key={tag} tag={tag} />
                ))}
            </section>

            <section className="logements-dropdown">
                <Dropdown title="Description" items={[data.description]} />
                <Dropdown title="Équipements" items={data.equipments} />
            </section>
        </div>
    );
}

export default Logements;
