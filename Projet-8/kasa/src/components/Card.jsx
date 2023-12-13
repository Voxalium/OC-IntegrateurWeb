function Card({ title, img }) {
    const cardImg = { backgroundImage: `url(${img})` };
    return (
        <article style={cardImg} className="card">
            <div className="carImg-overlay"></div>
            <p className="card-title">{title}</p>
        </article>
    );
}

export default Card;
