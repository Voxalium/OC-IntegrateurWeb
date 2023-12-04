//components
import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";

//image
import bannerImg from "../../assets/IMG.png";

function Home() {
    return (
        <div>
            <Banner
                title="Chez vous, partout ou ailleurs"
                img={bannerImg}
            ></Banner>
            <Gallery />
        </div>
    );
}

export default Home;
