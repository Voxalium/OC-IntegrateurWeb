import FilledStar from "./FilledStar";
import EmptyStar from "./EmptyStar";

function Stars(props) {
    const rating = props.rating;
    const maxStars = 5;

    const starArray = Array.from(
        {
            length: maxStars,
        },
        (_, index) =>
            index < rating ? (
                <FilledStar key={index} />
            ) : (
                <EmptyStar key={index} />
            )
    );

    return <div className="star-rating">{starArray}</div>;
}

export default Stars;
