import { useNavigate } from "react-router-dom";

function Card({ title, img, id }) {
    const cardImg = { backgroundImage: `url(${img})` };
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/logements/${id}`);
    };

    return (
        <article
            onClick={() => handleClick(id)}
            style={cardImg}
            className="card"
        >
            <p className="card-title">{title}</p>
        </article>
    );
}

export default Card;
