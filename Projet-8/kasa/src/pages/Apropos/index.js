import bannerImg from "../../assets/IMG2.png";

//components
import Banner from "../../components/Banner/Banner.jsx";
import Accordion from "../../components/Accordion/Accordion.jsx";

function Apropos() {
    return (
        <div className="apropos">
            <Banner title="" img={bannerImg} />
            <Accordion />
        </div>
    );
}

export default Apropos;
