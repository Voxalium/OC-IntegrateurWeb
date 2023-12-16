import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";

function Slideshow(props) {
    const img = props.pictures;
    return (
        <div className="slideshow">
            <img className="img-logement" src="" alt="image logement" />
            <img
                className="slideshow-arrow left-arrow"
                src={arrowLeft}
                alt="left arrow"
            />
            <img
                className="slideshow-arrow right-arrow"
                src={arrowRight}
                alt="right arrow"
            />
            <span className="slideshow-numbers"></span>
        </div>
    );
}

export default Slideshow;
