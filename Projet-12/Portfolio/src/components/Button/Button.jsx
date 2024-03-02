export const Button = ({ title, link }) => {
    return (
        <a target="_blank" href={link} className="button">
            {title}
        </a>
    );
};
