import { Tag } from "../Tag/Tag";
export const CardFlip = ({ cover, title, link, content, tag }) => {
    const cardStyle = {
        backgroundImage: `url(${cover}) `,
        backgroundSize: "cover",
    };
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front" style={cardStyle}></div>
                <div className="flip-card-back">
                    <p className="content">{content}</p>
                    {link ? (
                        <a target="_blank" href={link}>
                            Lien Github
                        </a>
                    ) : null}

                    <div className="tags">
                        {tag.map((i, idx) => (
                            <Tag key={`Tag-${idx}`} name={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
