import profile from "/ratProfile.webp";
import { intro } from "../../datas/data.json";
import { Arrow } from "../../components/Arrow/Arrow";
import { Button } from "../../components/Button/Button";
import cv from "/documents/CV_Terence_Truyens.pdf";
export const Intro = () => {
    return (
        <section id="intro" className="intro">
            <div className="container">
                <h1>{intro.title}</h1>
                <div className="text">
                    <div className="info">
                        <p>{intro.body}</p>
                        <Button title="Mon Cv" link={cv} />
                    </div>

                    <img
                        src={profile}
                        alt="Image de profile"
                        className="profile"
                    />
                </div>
            </div>
            <Arrow link="#project" direction="down" />
        </section>
    );
};
