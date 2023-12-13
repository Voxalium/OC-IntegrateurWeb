function Dropdown(props) {
    const items = props.items;
    const title = props.title;
    const listItems = items.map((item) => (
        <li key={item.toString()}>
            <a>{item}</a>{" "}
        </li>
    ));
    return (
        <article className="dropdown">
            <h3>{title}</h3>
            <ul>{listItems}</ul>
        </article>
    );
}

export default Dropdown;
