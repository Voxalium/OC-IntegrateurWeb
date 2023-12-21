import { useLoaderData } from "react-router-dom";

//Components
import Dropdown from "../../components/Dropdown";
import Slideshow from "../../components/Slideshow";
import Info from "../../components/Info";
import Tag from "../../components/Tag";
import Profile from "../../components/Profile";
import Stars from "../../components/Stars";

function Logements() {
    const data = useLoaderData();
    return (
        <div className="logements">

            <Slideshow pictures={data.pictures} />

            <div className="logements-info">

                <div className="logements-description">

                    <Info title={data.title} location={data.location} />

                    <section className="logements-tags">
                        {data.tags.map((tag) => (
                            <Tag key={tag} tag={tag} />
                        ))}
                    </section>

                </div>

                <div className="logements-host">
                    <Profile
                        name={data.host.name}
                        picture={data.host.picture}
                    />
                    <Stars rating={data.rating} />
                </div>
            </div>
            <section className="logements-dropdown">
                <Dropdown title="Description" items={[data.description]} />
                <Dropdown title="Équipements" items={data.equipments} />
            </section>
        </div>
    );
}

export default Logements;
