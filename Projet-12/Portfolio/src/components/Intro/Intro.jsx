import profile from "../../assets/ratProfile.png";
import { intro } from "../../datas/data.json";
export const Intro = () => {
    return (
        <div className="info">
            <div className="text">
                <h1>{intro.title}</h1>
                <p>{intro.body}</p>
            </div>
            <img src={profile} alt="Image de profile" className="profile" />
        </div>
    );
};
