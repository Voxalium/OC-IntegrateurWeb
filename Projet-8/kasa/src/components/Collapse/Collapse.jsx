import { useState } from "react";
import Arrow from "./Arrow";

function Collapse(props) {
    const items = props.items;
    const title = props.title;

    const [isOpen, setIsOpen] = useState(false);

    const listItems = items.map((item) => (
        <li key={item.toString()}>{item}</li>
    ));
    return (
        <article className={`dropdown ${isOpen ? "open" : ""}`}>
            <h3 onClick={() => setIsOpen((prev) => !prev)}>
                {title} <Arrow isOpen={isOpen} />
            </h3>
            <ul>{listItems} </ul>
        </article>
    );
}

export default Collapse;
