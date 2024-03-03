export const Grid = ({ data }) => {
    return (
        <div className="grid">
            <div className="container">
                <div className="img-container">
                    {data?.map((d, idx) => (
                        <div key={`cell-${idx}`} className="grid-cell">
                            <img key={`img-${idx}`} src={d.img} alt="img" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
