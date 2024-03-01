import profile from "../../assets/ratProfile.png";
import { intro } from "../../datas/data.json";
import { Arrow } from "../../components/Arrow/Arrow";
import { Button } from "../../components/Button/Button";
export const Intro = () => {
    return (
        <div id="intro" className="intro">
            <div className="container">
                <div className="text">
                    <h1>{intro.title}</h1>
                    <p>{intro.body}</p>
                    <Button title="Mon Cv" />
                </div>
                <img src={profile} alt="Image de profile" className="profile" />
            </div>
            <Arrow link="#project" direction="down" />
        </div>
    );
};
