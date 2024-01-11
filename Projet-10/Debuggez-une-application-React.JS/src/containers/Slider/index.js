import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";
import "./style.scss";

const Slider = () => {
    const { data } = useData();
    const [index, setIndex] = useState(0);

    const byDateDesc = data?.focus.sort((evtA, evtB) =>
        // Changement de "<" en ">"
        new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
    );

    const nextCard = () => {
        setTimeout(
            // Ajout de index + 1 pour fix le depassement
            // Ajout de ? pour test byDateDesc
            () => setIndex(index + 1 < byDateDesc?.length ? index + 1 : 0),
            5000
        );
    };
    useEffect(() => {
        nextCard();
    });
    return (
        <div className="SlideCardList">
            {byDateDesc?.map((event, idx) => (
                // Remplacement fragment par une <div>
                // Key event.title pour slide
                // Alt img event.title
                // Key _.title pour Radio
                <div key={`slide-${event.title}`}>
                    <div
                        className={`SlideCard SlideCard--${
                            index === idx ? "display" : "hide"
                        }`}
                    >
                        <img src={event.cover} alt={event.description} />
                        <div className="SlideCard__descriptionContainer">
                            <div className="SlideCard__description">
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                                <div>{getMonth(new Date(event.date))}</div>
                            </div>
                        </div>
                    </div>
                    <div className="SlideCard__paginationContainer">
                        <div className="SlideCard__pagination">
                            {byDateDesc.map((_, radioIdx) => (
                                <input
                                    key={`radio-${_.title}`}
                                    type="radio"
                                    name="radio-button"
                                    checked={index === radioIdx}
                                    readOnly
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Slider;
