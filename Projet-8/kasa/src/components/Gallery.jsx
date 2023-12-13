import Card from "./Card";
import data from "../datas/logements.json";

function Gallery() {
    return (
        <div className="gallery">
            {data.map((logement) => (
                <Card
                    key={logement.id}
                    title={logement.title}
                    img={logement.cover}
                />
            ))}
        </div>
    );
}

export default Gallery;
