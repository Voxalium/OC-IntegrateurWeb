import profile from "../../assets/ratProfile.png";

export const Info = () => {
    return (
        <div className="info">
            <div className="text">
                <h1 className="title">Terence Truyens, développeur web.</h1>
                <p className="info-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eligendi odit hic sint voluptatibus reprehenderit fuga quos
                    laboriosam quaerat blanditiis. Esse consequatur deleniti
                    possimus voluptas, cum illo incidunt totam quam culpa
                    voluptatum maiores aut doloremque consectetur explicabo sunt
                    illum ex, beatae voluptatem accusamus porro ullam fugit
                    sapiente ea. Provident, ipsam deleniti!
                </p>
            </div>
            <img src={profile} alt="Image de profile" className="profile" />
        </div>
    );
};
