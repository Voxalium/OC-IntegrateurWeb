export const CardFlip = ({ cover, title, link, content }) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div
                    className="flip-card-front"
                    style={{ backgroundImage: `url(${cover})` }}
                >
                    <p className="title">{title}</p>
                </div>
                <div className="flip-card-back">
                    <p className="content">{content}</p>
                    <a href={link}>Lien Github</a>
                </div>
            </div>
        </div>
    );
};
