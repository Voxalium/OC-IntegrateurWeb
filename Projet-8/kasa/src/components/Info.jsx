function Info(props) {
    <hl></hl>;
    const title = props.title;
    const location = props.location;

    return (
        <section className="logements-info">
            <h3>{title}</h3>
            <p>{location}</p>
        </section>
    );
}

export default Info;
