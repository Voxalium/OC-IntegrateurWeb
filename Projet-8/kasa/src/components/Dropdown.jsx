import { useState } from "react";
import Arrow from "./Arrow";

function Dropdown(props) {
    const items = props.items;
    const title = props.title;

    const [isOpen, setIsOpen] = useState(false);

    const listItems = items.map((item) => (
        <li key={item.toString()}>
            <a href="#">{item} </a>{" "}
        </li>
    ));
    return (
        <article className="dropdown">
            <h3 onClick={() => setIsOpen((prev) => !prev)}>
                {title} <Arrow isOpen={isOpen} />
            </h3>
            {isOpen && <ul>{listItems}</ul>}
        </article>
    );
}

export default Dropdown;