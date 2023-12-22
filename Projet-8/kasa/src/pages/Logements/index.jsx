import { useLoaderData } from "react-router-dom";

//Components
import Collapse from "../../components/Collapse/Collapse.jsx";
import Slideshow from "../../components/Logement/Slideshow.jsx";
import Info from "../../components/Logement/Info.jsx";
import Tag from "../../components/Logement/Tag.jsx";
import Profile from "../../components/Logement/Profile.jsx";
import Stars from "../../components/Stars/Stars.jsx";

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
                <Collapse title="Description" items={[data.description]} />
                <Collapse title="Équipements" items={data.equipments} />
            </section>
        </div>
    );
}

export default Logements;
