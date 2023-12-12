import Banner from "../../components/Banner";
import bannerImg from "../../assets/IMG2.png";
import Accordion from "../../components/Accordion";
function Apropos() {
    return (
        <div className="apropos">
            <Banner title="" img={bannerImg} />
            <Accordion />
        </div>
    );
}

export default Apropos;
