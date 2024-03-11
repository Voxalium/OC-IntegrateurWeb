export const CardOs = ({ title, content, image }) => {
    return (
        <div className="card-os">
            <div className="os">
                <h4>{title}</h4>
                <div className="container">
                    <img
                        src={image}
                        alt={`logo ${title}`}
                        height="100px"
                        width="100px"
                    />
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};
