import { Link } from "react-router-dom";

function Card({ title, img }) {
    const cardImg = { backgroundImage: `url(${img})` };
    return (
        <Link to="/logements">
            <article style={cardImg} className="card">
                <div className="carImg-overlay"></div>
                <p className="card-title">{title}</p>
            </article>
        </Link>
    );
}

export default Card;
