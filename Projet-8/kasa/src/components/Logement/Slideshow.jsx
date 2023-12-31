import { useState } from "react";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";

function Slideshow(props) {
    const pictures = props.pictures;

    const [index, setIndex] = useState(0);

    function handleClick(increment) {
        const newIndex =
            (index + increment + pictures.length) % pictures.length;
        setIndex(newIndex);
    }
    return (
        <div className="slideshow">
            <img
                className="img-logement"
                src={pictures[index]}
                alt="image logement"
            />
            <img
                onClick={() => handleClick(-1)}
                className="slideshow-arrow left-arrow"
                src={arrowLeft}
                alt="left arrow"
            />
            <img
                onClick={() => handleClick(+1)}
                className="slideshow-arrow right-arrow"
                src={arrowRight}
                alt="right arrow"
            />
            <span className="slideshow-numbers">
                {index + 1}/{pictures.length}
            </span>
        </div>
    );
}

export default Slideshow;
