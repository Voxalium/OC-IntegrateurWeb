import profile from "../../assets/ratProfile.png";
import { intro } from "../../datas/data.json";
import { Arrow } from "../Arrow/Arrow";
export const Intro = () => {
    return (
        <div id="intro" className="intro">
            <div className="container">
                <div className="text">
                    <h1>{intro.title}</h1>
                    <p>{intro.body}</p>
                </div>
                <img src={profile} alt="Image de profile" className="profile" />
            </div>
            <Arrow link="#project" direction="down" />
        </div>
    );
};
