import arrow_open from "../assets/arrow_open.svg";
import arrow_closed from "../assets/arrow.svg";
function Arrow({ isOpen }) {
    return (
        <span className="arrow">
            {isOpen ? (
                <img src={arrow_open} alt="arrow_open" />
            ) : (
                <img src={arrow_closed} alt="arrow_closed" />
            )}
        </span>
    );
}

export default Arrow;
