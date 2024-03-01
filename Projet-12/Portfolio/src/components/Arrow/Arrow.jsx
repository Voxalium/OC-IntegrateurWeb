import arrowUp from "/ui/arrow_up.webp";
import arrowDown from "/ui/arrow_down.webp";
export const Arrow = ({ link, direction }) => {
    let img = "";
    direction == "down" ? (img = arrowDown) : (img = arrowUp);

    return (
        <a href={link} className={`arrow ${direction}`}>
            <img src={img} alt="navigation arrow" />
        </a>
    );
};
