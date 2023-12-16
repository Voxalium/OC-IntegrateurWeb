import Dropdown from "../../components/Dropdown";
import Slideshow from "../../components/Slideshow";
import Info from "../../components/Info";
import Tag from "../../components/Tag";
import data from "../../datas/logements.json";

function Logements() {
    return (
        <div className="logements">
            <Slideshow />

            <Info title={data[0].title} location={data[0].location} />

            <section className="logements-tags">
                {data[0].tags.map((tag) => (
                    <Tag key={data[0].id.toString()} tag={tag} />
                ))}
            </section>
            <section className="logements-dropdown">
                <Dropdown title="Description" items={[data[0].description]} />
                <Dropdown title="Equipements" items={data[0].equipments} />
            </section>
        </div>
    );
}

export default Logements;
