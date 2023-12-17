import Card from "./Card";

function Gallery(props) {
    const data = props.data;
    return (
        <div className="gallery">
            {data.map((logement) => (
                <Card
                    id={logement.id}
                    key={logement.id}
                    title={logement.title}
                    img={logement.cover}
                />
            ))}
        </div>
    );
}

export default Gallery;
