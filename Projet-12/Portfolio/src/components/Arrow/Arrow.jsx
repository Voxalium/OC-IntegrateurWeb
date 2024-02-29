import arrowUp from "/ui/arrow_up.webp";
import arrowDown from "/ui/arrow_down.webp";
export const Arrow = ({ link, direction }) => {
    let img = "";
    switch (direction) {
        case "up":
            img = arrowUp;
            break;
        case "down":
            img = arrowDown;
    }

    return (
        <a href={link} className={`arrow ${direction}`}>
            <img src={img} alt="navigation arrow" />
        </a>
    );
};
